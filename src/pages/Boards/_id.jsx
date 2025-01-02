import { Container } from '@mui/material'
import AppBar from '../../components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <div>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
        <AppBar />
        <BoardBar />
        <BoardContent />
      </Container>
    </div>
  )
}

export default Board
