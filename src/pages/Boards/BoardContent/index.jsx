import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => `calc(100% - ${theme.customes.appBarHeight} - ${theme.customes.boardBarHeight})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Board content
    </Box>
  )
}

export default BoardContent
