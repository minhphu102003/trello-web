import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import {
  useColorScheme
} from '@mui/material/styles'
import { Container } from '@mui/material'
import theme from './theme.js'
// import useMediaQuery from '@mui/material/useMediaQuery'


function SelectSmall() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon fontSize='small' />
            Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeIcon fontSize='small' />
            Dark
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightnessIcon fontSize='small' />
            System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}


function App() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
        <Box sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.customes.appBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
          <SelectSmall />
        </Box>
        <Box sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.customes.boardBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
          Board bar
        </Box>
        <Box sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: `calc(100% - ${theme.customes.appBarHeight} - ${theme.customes.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Board content
        </Box>
      </Container>
    </>
  )
}

export default App
