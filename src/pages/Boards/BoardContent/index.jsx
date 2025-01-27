import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import PropTypes from 'prop-types'
import { mapOrder } from '~/utils/sort.js'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'
import { useState, useEffect } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { cloneDeep, set } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint :{ distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint :{ distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint :{
    delay: 250,
    tolerance: 5
  } })
  // const sensors = useSensors(pointerSensor)

  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumnsState, setOrderedColumnsState] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null)

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  }, [board])

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)

    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
    }
  }

  // Tìm 1 column theo card id
  const findColumnByCardId = (cardId) => {
    return orderedColumnsState.find(column => column.cards.map(card => card._id)?.includes(cardId))
  }

  const customeDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || !active) return

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const { id: activeDraggingCardId, data: { current : activeDraggingCardData } } = active
      const { id: overCardId } = over

      // console.log(activeDraggingCardId)
      // console.log(overCardId)

      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if ( !activeColumn || ! overColumn) return

      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        //
      } else {
        // Nếu thẻ được kéo thả trong cùng 1 cột
        const oldIndex = oldColumnWhenDraggingCard?.cards?.findIndex( c => c._id === activeDragItemId)

        const newIndex = overColumn?.cards?.findIndex( c => c._id === overCardId)

        const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldIndex, newIndex)

        setOrderedColumnsState(prevColumns => {
          const nextColumns = cloneDeep(prevColumns)

          const targetColumn = nextColumns.find(column => column._id === overColumn._id)
          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map( c => c._id)
          return nextColumns
        })
      }
    }

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id != over.id) {
        const oldIndex = orderedColumnsState.findIndex( c => c._id === active.id)
        const newIndex = orderedColumnsState.findIndex( c => c._id === over.id)

        const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex)
        // Dùng biến dưới này sau khi sửa dữ liệu thông qua api
        // const idDndOrderedColumns = dndOrderedColumns.map( c => c._id)

        setOrderedColumnsState(dndOrderedColumns)
      }
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumnWhenDraggingCard(null)
  }

  const handleDragOver = (event) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
    const { active, over } = event
    if (!over || !active ) return

    const { id: activeDraggingCardId, data: { current : activeDraggingCardData } } = active
    const { id: overCardId } = over

    // console.log(activeDraggingCardId)
    // console.log(overCardId)

    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if ( !activeColumn || ! overColumn) return
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumnsState(prevColumns => {
        const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

        let newCardIndex
        const isBelowOverItem = active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height

        const modifier = isBelowOverItem ? 1 : 0

        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        const nextColumns = cloneDeep(prevColumns)

        const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
        }

        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
        }

        return nextColumns
      })
    }
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      sensors={sensors}
    >
      <Box sx={{
        paddingTop: 1.5,
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => theme.customes.boardConentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumnsState} />
        <DragOverlay dropAnimation={customeDropAnimation}>
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && <Column column={activeDragItemData} />)}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && <Card card={activeDragItemData} />)}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

BoardContent.propTypes = {
  board: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    columnOrderIds: PropTypes.array.isRequired
  }).isRequired
}

export default BoardContent
