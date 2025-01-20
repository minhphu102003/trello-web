import { Container } from '@mui/material'
import AppBar from '~/components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import { mockData } from '~/apis/mock-data.js'

function Board() {
  return (
    <div>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.second' }}>
        <AppBar />
        <BoardBar board={mockData?.board} />
        <BoardContent board={mockData?.board} />
      </Container>
    </div>
  )
}

export default Board
