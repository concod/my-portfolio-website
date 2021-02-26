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
import produce from 'immer'
import clsx from 'clsx'

const DrawerMenulist = ({ setIsOpen }) => {
  const classes = drawerStyles()
  const [menuItemOpen, setMenuItemOpen] = useState({
    previousOpenedIndex: null,
    currentOpenIndex: null,
    open: false,
  })

  const handleExpandedMenuItemClick = currentIndex => {
    if (menuItemOpen.open) {
      if (menuItemOpen.currentOpenIndex === currentIndex)
        setMenuItemOpen(
          produce(draft => {
            draft.previousOpenedIndex = currentIndex
            draft.currentOpenIndex = null
            draft.open = false
          }),
        )
      else
        setMenuItemOpen(
          produce(draft => {
            draft.previousOpenedIndex = draft.currentOpenIndex
            draft.currentOpenIndex = currentIndex
            draft.open = true
          }),
        )
    } else {
      if (menuItemOpen.previousOpenedIndex === currentIndex)
        setMenuItemOpen(
          produce(draft => {
            draft.previousOpenedIndex = draft.currentOpenIndex
            draft.currentOpenIndex = currentIndex
            draft.open = true
          }),
        )
      else
        setMenuItemOpen(
          produce(draft => {
            draft.currentOpenIndex = currentIndex
            draft.open = true
          }),
        )
    }
  }

  return (
    <Padding16x16
      // onMouseEnter={() => setIsOpen(true)}
      // onMouseLeave={() => setIsOpen(false)}
      className={classes.root}>
      <List component='nav'>
        {drawerMenuItems.map((menuItem, index) => (
          <Box key={generateListKeys('box', index)}>
            <ListItem
              className={clsx(classes.drawerMenuList, {
                [classes.drawerMenuListActive]:
                  index === menuItemOpen.currentOpenIndex,
              })}
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
              {menuItemOpen.currentOpenIndex === index ? (
                <ExpandMoreRounded />
              ) : (
                <ChevronRight />
              )}
            </ListItem>
            <Collapse
              in={index === menuItemOpen.currentOpenIndex && menuItemOpen.open}
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
