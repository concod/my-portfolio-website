import { Box, IconButton } from '@material-ui/core'
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons'
import clsx from 'clsx'

import { drawerStyles } from './drawer-styles'

const DrawerToggleButton = ({ isOpen, setIsOpen }) => {
  const classes = drawerStyles()
  return (
    // <Box boxShadow={3}>
    <IconButton
      className={clsx(classes.drawerToggleButton, {
        [classes.drawerToggleIconLeft]: isOpen,
        [classes.drawerToggleIconRight]: !isOpen,
      })}
      // color='primary'
      size='small'
      onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <ChevronLeftRounded fontSize='inherit' />
      ) : (
        <ChevronRightRounded fontSize='inherit' />
      )}
    </IconButton>
    // </Box>
  )
}

export default DrawerToggleButton
