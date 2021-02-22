import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Box } from '@material-ui/core'
import { Brightness3Rounded, Brightness7Rounded } from '@material-ui/icons'

import { setDarkTheme, switchToPreviousTheme } from 'store/actions'

import THEMES_KEYS from 'utils/constants/theme-keys'

const ThemeToggler = () => {
  const key = useSelector(({ themes }) => themes.currentTheme.key)
  const dispatch = useDispatch()

  const handleToggle = () => {
    if (key === THEMES_KEYS.DARK) dispatch(switchToPreviousTheme())
    else dispatch(setDarkTheme())
  }
  return (
    <Box display="flex" width="fit-content">
      <IconButton
        aria-label="Toggle light/dark theme"
        component="span"
        onClick={handleToggle}>
        {key === THEMES_KEYS.DARK ? (
          <Brightness7Rounded />
        ) : (
          <Brightness3Rounded />
        )}
      </IconButton>
    </Box>
  )
}

export default ThemeToggler
