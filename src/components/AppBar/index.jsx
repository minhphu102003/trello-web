import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/index.jsx'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/mdi--trello.svg'
import { SvgIcon } from '@mui/material' 
import { Typography } from '@mui/material'
import WorkSpaces from './Menus/WorkSpaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Template from './Menus/Template'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profiles'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.customes.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component={TrelloIcon} sx={{ color: 'primary.main' }}/>
            <Typography variant="span" sx={{ color: 'primary.main', fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
          </Box>

          <WorkSpaces />
          <Recent />
          <Starred />
          <Template />

          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search.." type="search" size='small' />
        <ModeSelect />

        <Tooltip title="Notificaitons">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
