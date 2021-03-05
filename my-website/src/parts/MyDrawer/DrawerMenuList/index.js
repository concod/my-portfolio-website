import { useState } from 'react'
import { Box, Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { ChevronRight, DraftsRounded, ExpandMoreRounded, RemoveRounded } from '@material-ui/icons'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { drawerStyles } from '../drawer-styles'
import { generateListKeys } from 'utils/helpers/generate-list-keys'
import { drawerMenuItems } from '../drawer-menu-items'
import { PaddingAxB } from 'components/PaddingSet'
import produce from 'immer'
import clsx from 'clsx'
import { DRAWER_CONST } from 'utils/constants/drawer-constants'
import { PAGES, URL } from 'utils/constants/pages-links'
import { useEffect } from 'react'

const DrawerMenulist = ({ isOpen, setIsOpen }) => {
  const classes = drawerStyles()
  const { pathname, state } = useLocation()
  const [menuItemOpen, setMenuItemOpen] = useState({
    previousOpenedIndex: null,
    currentOpenIndex: null,
    open: false,
    subMenuItemIndex: null,
    subMenuItemName: null,
  })

  console.log(pathname, state)
  // const a = useLocation()
  console.log(menuItemOpen)
  useEffect(() => {
    drawerMenuItems.some((item, index) =>
      item.subMenuItems.some((subItem, i) => {
        console.log(index)
        const found = pathname.includes(subItem.title.replace(/\s+/g, '-'))
        if (found) {
          setMenuItemOpen(
            produce(draft => {
              draft.currentOpenIndex = index
              draft.open = true
              draft.subMenuItemIndex = i
              draft.subMenuItemName = subItem.title
            }),
          )
        } else
          setMenuItemOpen(
            produce(draft => {
              draft.previousOpenedIndex = null
              draft.currentOpenIndex = null
              draft.open = false
              draft.subMenuItemIndex = null
              draft.subMenuItemName = null
            }),
          )
        return found
      }),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

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

  // const handleSubMenuItemClick = index => {
  //   setMenuItemOpen(
  //     produce(draft => {
  //       draft.subMenuItemIndex = index
  //     }),
  //   )
  // }
  return (
    <PaddingAxB
      className={classes.root}
      A={DRAWER_CONST.paddingLeftRight / 2}
      B={DRAWER_CONST.paddingLeftRight / 2}
      // onMouseEnter={() => setIsOpen(true)}
      // onMouseLeave={() => setIsOpen(false)}
    >
      <List component='nav'>
        {drawerMenuItems.map((menuItem, index) => (
          <Box key={generateListKeys('box', index)}>
            <ListItem
              className={clsx(classes.drawerMenuList, {
                [classes.drawerMenuListActive]: index === menuItemOpen.currentOpenIndex && isOpen,
              })}
              button
              key={menuItem.title}
              onClick={() => {
                handleExpandedMenuItemClick(index)
                // handleRouteChange(index)
                // history.push(PAGES.LANDING_PAGES)
              }}>
              <ListItemIcon className={classes.drawerMenuListIcon}>{menuItem.icon}</ListItemIcon>
              <ListItemText className={classes.drawerMenuListText}>
                <Typography variant='h5'>{menuItem.title}</Typography>
              </ListItemText>
              {menuItemOpen.currentOpenIndex === index ? <ExpandMoreRounded /> : <ChevronRight />}
            </ListItem>
            <Collapse in={index === menuItemOpen.currentOpenIndex && menuItemOpen.open} timeout='auto' unmountOnExit>
              {menuItem.subMenuItems.map((subMenuItem, i) => (
                <List key={subMenuItem.title} component='div' disablePadding>
                  <ListItem
                    button
                    style={{ pointerEvents: !isOpen && 'none' }}
                    // onClick={() => handleSubMenuItemClick(i)}
                    className={clsx({
                      [classes.drawerSubMenuList]: subMenuItem.title === menuItemOpen.subMenuItemName,
                    })}
                    component={Link}
                    to={{
                      pathname: subMenuItem.link.replace(`:${URL.NAME}`, subMenuItem.title.replace(/\s+/g, '-')),
                      state: {
                        menuItemIndex: index,
                        subMenuItemIndex: i,
                      },
                    }}>
                    <ListItemIcon className={classes.drawerMenuListIcon}>
                      <RemoveRounded color='inherit' />
                    </ListItemIcon>
                    <ListItemText primary={subMenuItem.title} />
                  </ListItem>
                </List>
              ))}
            </Collapse>
          </Box>
        ))}
      </List>
    </PaddingAxB>
  )
}

export default DrawerMenulist
