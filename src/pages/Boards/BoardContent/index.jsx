import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import PropTypes from 'prop-types'

function BoardContent({ board }) {
  return (
    <Box sx={{
      paddingTop: 1.5,
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => theme.customes.boardConentHeight,
      p: '10px 0'
    }}>
      <ListColumns columns={board?.columns} />
    </Box>
  )
}

BoardContent.propTypes = {
  board: PropTypes.shape({
    columns: PropTypes.array.isRequired
  }).isRequired
}

export default BoardContent
