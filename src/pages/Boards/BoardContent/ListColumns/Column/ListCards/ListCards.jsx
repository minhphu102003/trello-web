import Box from '@mui/material/Box'
import Card from './Card/Card'
import PropTypes from 'prop-types'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCards({ cards }) {
  return (
    <SortableContext items={cards.map((column) => column?._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          p: '0 5px',
          m: '0 5px',
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) => `calc(${theme.customes.boardConentHeight} 
          - ${theme.spacing(5)}
          - ${theme.customes.columnHeaderHeight}
          - ${theme.customes.columnFooterHeight})`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf'
          },
        }}
      >
        {cards.map(card => (<Card card={card} key={card._id} />))}
      </Box>
    </SortableContext>
  )
}

ListCards.propTypes = {
  cards: PropTypes.shape({ // Tiêu đề của cột
    card: PropTypes.object.isRequired // Mảng các card
  }).isRequired
}

export default ListCards
