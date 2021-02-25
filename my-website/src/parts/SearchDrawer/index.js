import { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import DrawerToggleButton from 'parts/MyDrawer/DrawerToggleButton'
import { Box, Container, Input } from '@material-ui/core'
import clsx from 'clsx'
import { searchStyles } from './search-styles'
import SearchedList from './SearchedList'

const SearchDrawer = () => {
  const [isOpen, setIsOpen] = useState(true)
  const classes = searchStyles()

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
      anchor='left'
      open={isOpen}>
      <SearchedList />
    </Drawer>
  )
}

export default SearchDrawer
