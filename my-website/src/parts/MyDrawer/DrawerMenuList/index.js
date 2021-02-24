import { useState } from 'react'
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { InboxRounded, MailOutlineRounded } from '@material-ui/icons'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { drawerStyles } from '../drawer-styles'
import { generateListKeys } from 'utils/helpers/generate-list-keys'
import { drawerMenuItems } from './drawer-menu-items'

const DrawerMenulist = () => {
  const classes = drawerStyles()

  const [menuItemOpen, setMenuItemOpen] = useState({
    previousOpenedIndex: null,
    currentOpenindex: null,
    open: false,
  })
  //   console.log(menuItemOpen)
  const handleExpandedMenuItemClick = currentIndex => {
    if (menuItemOpen.open) {
      if (menuItemOpen.currentOpenindex === currentIndex)
        setMenuItemOpen({
          ...menuItemOpen,
          previousOpenedIndex: currentIndex,
          currentOpenindex: null,
          open: false,
        })
      else
        setMenuItemOpen({
          ...menuItemOpen,
          previousOpenedIndex: menuItemOpen.currentOpenindex,
          currentOpenindex: currentIndex,
          open: true,
        })
    } else {
      if (menuItemOpen.previousOpenedIndex === currentIndex)
        setMenuItemOpen({
          ...menuItemOpen,
          previousOpenedIndex: menuItemOpen.currentOpenindex,
          currentOpenindex: currentIndex,
          open: true,
        })
      else
        setMenuItemOpen({
          ...menuItemOpen,
          previousOpenedIndex: menuItemOpen.previousOpenedIndex,
          currentOpenindex: currentIndex,
          open: true,
        })
    }
  }
  console.log(menuItemOpen)
  return (
    <>
      <List component="nav" className={classes.root}>
        {drawerMenuItems.map((menuItem, index) => (
          <Box key={generateListKeys('box', index)}>
            <ListItem
              button
              key={menuItem.title}
              onClick={() => handleExpandedMenuItemClick(index)}>
              <ListItemIcon className={classes.drawerMenuListIcon}>
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText primary={menuItem.title} />
              {menuItemOpen.currentOpenindex === index ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItem>
            <Collapse
              in={index === menuItemOpen.currentOpenindex && menuItemOpen.open}
              timeout="auto"
              unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon className={classes.drawerMenuListIcon}>
                    <InboxRounded />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </>
  )
}

export default DrawerMenulist
