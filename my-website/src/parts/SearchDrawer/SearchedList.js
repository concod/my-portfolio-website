import { useState } from 'react'
import {
  Box,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core'
import { Padding16x16 } from 'components/PaddingSet'
import { drawerMenuItems } from 'parts/MyDrawer/drawer-menu-items'
import { useEffect } from 'react'
import { searchStyles } from './search-styles'
import { ArrowBackRounded } from '@material-ui/icons'
import { setIsSearchDrawerOpen } from 'store/actions'

const SearchedList = ({ dispatch }) => {
  const classes = searchStyles()
  const [input, setInputValue] = useState(null)
  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    if (input === null) return
    if (input.length > 0) {
      setSearchList(
        drawerMenuItems
          .map(option => ({
            ...option,
            subMenuItems: option.subMenuItems.filter(subItem =>
              subItem.title
                .toLocaleLowerCase()
                .startsWith(input.toLocaleLowerCase()),
            ),
          }))
          .filter(option => option.subMenuItems.length > 0),
      )
    } else setSearchList([])
  }, [input])

  return (
    <Padding16x16>
      <Box display='flex' alignItems='center'>
        <IconButton onClick={() => dispatch(setIsSearchDrawerOpen(false))}>
          <ArrowBackRounded />
        </IconButton>
        <Input
          className={classes.searchInput}
          placeholder='Search for code, games and more...'
          value={input}
          onChange={e => setInputValue(e.target.value)}
        />
      </Box>
      <Box className={classes.searchContainer} marginLeft={5}>
        {searchList.map(({ title, subMenuItems, icon }) => (
          <List
            key={title}
            className={classes.searchListContainer}
            subheader={
              <ListSubheader className={classes.searchSubheader}>
                {title}
              </ListSubheader>
            }>
            {subMenuItems.map(({ title }) => (
              <ListItem button>
                <ListItemIcon className={classes.searchListIcon}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        ))}
      </Box>
    </Padding16x16>
  )
}

export default SearchedList
