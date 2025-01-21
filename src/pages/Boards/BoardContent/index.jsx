import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import PropTypes from 'prop-types'
import { mapOrder } from '~/utils/sort.js'

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      paddingTop: 1.5,
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => theme.customes.boardConentHeight,
      p: '10px 0'
    }}>
      <ListColumns columns={orderedColumns} />
    </Box>
  )
}

BoardContent.propTypes = {
  board: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    columnOrderIds: PropTypes.array.isRequired
  }).isRequired
}

export default BoardContent
