import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  backgroundColor: 'white',
  color: 'primary.main',
  border: 'none',
  borderRadius: '6px',
  fontSize: '0.875rem',
  '& .MuiSvgIcon-root': {
    color: 'primary.main',
    fontSize: '1.25rem'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.customes.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid rgb(92, 224, 189)'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Label with dashboard icon"
          clickable
          onClick={() => { }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/private workspace"
          clickable
          onClick={() => { }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
          onClick={() => { }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automations"
          clickable
          onClick={() => { }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          onClick={() => { }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />} sx={{ mr: 2 }}>Invite</Button>
        <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, cursor: 'pointer', color: 'white', '&:first-of-type': { bgcolor: '#a4b0be' } } }}>
          <Tooltip title="gabimaru" arrow>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoJ7GtinNx7FfFrDp0UDw7350qgp66Fe77w&s" />
          </Tooltip>
          <Tooltip title="gabimaru" arrow>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz22PNIuJwCvPsx3gCuhnrVLrn322spcDrPg&s" />
          </Tooltip>
          <Tooltip title="gabimaru" arrow>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgU-eVCv6U5FrTWUMs6E10dHNH5qu26hyTg&s" />
          </Tooltip>
          <Tooltip title="gabimaru" arrow>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoJ7GtinNx7FfFrDp0UDw7350qgp66Fe77w&s" />
          </Tooltip>
          <Tooltip title="gabimaru" arrow>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoJ7GtinNx7FfFrDp0UDw7350qgp66Fe77w&s" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
