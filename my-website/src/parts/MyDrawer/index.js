import { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import DrawerToggleButton from 'parts/MyDrawer/DrawerToggleButton'
import { Box, Container } from '@material-ui/core'
import clsx from 'clsx'
import { drawerStyles } from './drawer-styles'
import DrawerMenulist from './DrawerMenuList'
import DrawerLeftBar from './DrawerLeftBar'

const MyDrawer = () => {
  const [isOpen, setIsOpen] = useState(true)
  const classes = drawerStyles()
  console.log(isOpen)
  return (
    <Drawer
      container={Container}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx(
          { [classes.drawerOpen]: isOpen, [classes.drawerClose]: !isOpen },
          classes.paper,
        ),
      }}
      variant="permanent"
      anchor="left"
      open={isOpen}>
      <DrawerToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <Box bgcolor="yellow" overflow="hidden"> */}
      <Box display="flex">
        <DrawerLeftBar />
        <DrawerMenulist />
      </Box>
      {/* </Box> */}
    </Drawer>
  )
}

export default MyDrawer
