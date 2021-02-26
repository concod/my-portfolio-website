import { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import DrawerToggleButton from 'parts/MyDrawer/DrawerToggleButton'
import { Box, Container, Input } from '@material-ui/core'
import clsx from 'clsx'
import { searchStyles } from './search-styles'
import SearchedList from './SearchedList'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSearchDrawerOpen } from 'store/actions'

const SearchDrawer = () => {
  const classes = searchStyles()
  const isOpen = useSelector(state => state.drawers.isSearchDrawerOpen)
  const dispatch = useDispatch()
  console.log(isOpen)
  return (
    <Drawer
      onBackdropClick={() => dispatch(setIsSearchDrawerOpen(false))}
      anchor='left'
      open={isOpen}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx(
          { [classes.drawerOpen]: isOpen, [classes.drawerClose]: !isOpen },
          classes.paper,
        ),
      }}>
      <SearchedList dispatch={dispatch} />
    </Drawer>
  )
}

export default SearchDrawer
