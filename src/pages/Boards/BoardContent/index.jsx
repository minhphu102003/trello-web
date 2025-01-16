import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  return (
    <Box sx={{
      paddingTop: 1.5,
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => theme.customes.boardConentHeight,
      p: '10px 0'
    }}>
      <ListColumns />
    </Box>
  )
}

export default BoardContent
