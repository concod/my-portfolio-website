import { IconButton } from '@material-ui/core'
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons'
import clsx from 'clsx'

import { drawerStyles } from './drawer-styles'

const DrawerToggleButton = ({ isOpen, setIsOpen }) => {
  console.log(isOpen)
  const classes = drawerStyles()
  return (
    <IconButton
      className={clsx(classes.drawerToggleButton, {
        [classes.drawerToggleIconLeft]: isOpen,
        [classes.drawerToggleIconRight]: !isOpen,
      })}
      size="small"
      color="primary"
      onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <ChevronLeftRounded /> : <ChevronRightRounded />}
    </IconButton>
  )
}

export default DrawerToggleButton
