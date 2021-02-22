import { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { forwardRef } from 'react'
import DrawerToggleButton from 'parts/MyDrawer/DrawerToggleButton'
import { useRef } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
const useStyles = makeStyles(theme => ({
  drawer: {
    width: 200,
    // width: theme.custom.layout.expandedDrawerWidth,
    // flexShrink: 0,
    // whiteSpace: 'nowrap',

    backgroundColor: 'green',
  },
  paper: {
    overflowY: 'unset ',
  },
  drawerOpen: {
    backgroundColor: 'red',
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: 20,
    backgroundColor: 'green',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}))

const MyDrawer = () => {
  const [isOpen, setIsOpen] = useState(true)
  const drawerRef = useRef(null)
  const classes = useStyles()
  console.log(isOpen)
  return (
    // <Box width="fit-content" bgcolor="red">
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
      // style={{ zIndex: 10 }}
      // ref={drawerRef}
      variant="permanent"
      anchor="left"
      open={isOpen}>
      <DrawerToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box bgcolor="yellow" overflow="hidden">
        <Box>hieeeeeeeeeeeeeeeeeee</Box>
      </Box>
    </Drawer>
    // </Box>
  )
}

export default MyDrawer
