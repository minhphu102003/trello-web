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

function Card({ card }) {
  const shouldShowCardActions = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length;
  }

  return (
    <MuiCard
    sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0,0,,0,0.2)',
      overflow: 'unset'
    }}
  >
    {card?.cover && <CardMedia
      component='img'
      alt='green iguana'
      height='140'
      image={card?.cover}
    />}
    <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
      <Typography>{card?.title}</Typography>
    </CardContent>
    { shouldShowCardActions() && <CardActions sx={{ p: '0 4px 8px 4px' }}>
      {!!card?.memberIds?.length && <Button startIcon={<GroupIcon />} size='small'>
        {card?.memberIds?.length}
      </Button>}
      {!!card?.comments?.length && <Button startIcon={<ModeCommentIcon />} size='small'>
        {card?.comments?.length}
      </Button>}
      {!!card?.attachments?.length && <Button startIcon={<AttachFileIcon />} size='small'>
        {card?.attachments?.length}
      </Button>}
    </CardActions>}
  </MuiCard>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    memberIds: PropTypes.arrayOf(PropTypes.string), // Mảng ID của thành viên
    comments: PropTypes.arrayOf(PropTypes.string), // Mảng các nhận xét
    attachments: PropTypes.arrayOf(PropTypes.string) // Mảng các tệp đính kèm
  }).isRequired
}


export default Card
