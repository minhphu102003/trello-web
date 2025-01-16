import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import PropTypes from 'prop-types'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset'
        }}
      >
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Lizard</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard
    sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0,0,,0,0.2)',
      overflow: 'unset',
    }}
  >
    <CardMedia
      component='img'
      alt='green iguana'
      height='140'
      image='https://cdn.epicstream.com/images/ncavvykf/epicstream/05cacb652cb6cd3ec0d73ee486b884a641403994-1920x1080.jpg?auto=format'
    />
    <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
      <Typography>Lizard</Typography>
    </CardContent>
    <CardActions sx={{ p: '0 4px 8px 4px' }}>
      <Button startIcon={<GroupIcon />} size='small'>
        20
      </Button>
      <Button startIcon={<ModeCommentIcon />} size='small'>
        25
      </Button>
      <Button startIcon={<AttachFileIcon />} size='small'>
        30
      </Button>
    </CardActions>
  </MuiCard>
  )
}

Card.propTypes = {
  temporaryHideMedia: PropTypes.bool // hoặc PropTypes.any nếu kiểu không rõ ràng
}

export default Card
