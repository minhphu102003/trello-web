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
  TouchSensor
} from '@dnd-kit/core'
import { useState, useEffect } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

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

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if (active.id != over.id) {
      const oldIndex = orderedColumnsState.findIndex( c => c._id === active.id)
      const newIndex = orderedColumnsState.findIndex( c => c._id === over.id)

      const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex)
      // Dùng biến dưới này sau khi sửa dữ liệu thông qua api
      // const idDndOrderedColumns = dndOrderedColumns.map( c => c._id)

      setOrderedColumnsState(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        paddingTop: 1.5,
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => theme.customes.boardConentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumnsState} />
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
