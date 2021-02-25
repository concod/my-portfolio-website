import { useState } from 'react'
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {
  ChevronRight,
  ExpandMoreRounded,
  RemoveRounded,
} from '@material-ui/icons'
import { drawerStyles } from '../drawer-styles'
import { generateListKeys } from 'utils/helpers/generate-list-keys'
import { drawerMenuItems } from '../drawer-menu-items'
import { PaddingLeftRight16, Padding16x16 } from 'components/PaddingSet'

const DrawerMenulist = ({ setIsOpen }) => {
  const classes = drawerStyles()

  const [menuItemOpen, setMenuItemOpen] = useState({
    previousOpenedIndex: null,
    currentOpenindex: null,
    open: false,
  })
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
  return (
    <Padding16x16
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={classes.root}>
      <List component='nav'>
        {drawerMenuItems.map((menuItem, index) => (
          <Box key={generateListKeys('box', index)}>
            <ListItem
              button
              key={menuItem.title}
              onClick={() => handleExpandedMenuItemClick(index)}>
              <ListItemIcon className={classes.drawerMenuListIcon}>
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                className={classes.menuListText}
                primary={menuItem.title}
              />
              {menuItemOpen.currentOpenindex === index ? (
                <ExpandMoreRounded />
              ) : (
                <ChevronRight />
              )}
            </ListItem>
            <Collapse
              in={index === menuItemOpen.currentOpenindex && menuItemOpen.open}
              timeout='auto'
              unmountOnExit>
              {menuItem.subMenuItems.map((subMenuItem, index) => (
                <List key={subMenuItem.title} component='div' disablePadding>
                  <ListItem button>
                    <ListItemIcon className={classes.drawerMenuListIcon}>
                      <RemoveRounded />
                    </ListItemIcon>
                    <ListItemText primary={subMenuItem.title} />
                  </ListItem>
                </List>
              ))}
            </Collapse>
          </Box>
        ))}
      </List>
    </Padding16x16>
  )
}

export default DrawerMenulist
