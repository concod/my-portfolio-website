import { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import DrawerToggleButton from 'parts/MyDrawer/DrawerToggleButton'
import { Box, Container } from '@material-ui/core'
import clsx from 'clsx'
import { drawerStyles } from './drawer-styles'
import DrawerMenulist from './DrawerMenuList'
import DrawerLeftBar from './DrawerLeftBar'
import SearchDrawer from 'parts/SearchDrawer'

const MyDrawer = () => {
  const [isOpen, setIsOpen] = useState(true)
  const classes = drawerStyles()
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
      variant='permanent'
      // anchor='right'
      open={isOpen}>
      <SearchDrawer />
      <DrawerToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box display='flex' height='100vh'>
        <DrawerLeftBar />
        <DrawerMenulist isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
      {/* </Box> */}
    </Drawer>
  )
}

export default MyDrawer
