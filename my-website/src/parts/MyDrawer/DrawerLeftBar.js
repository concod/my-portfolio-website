import { useDispatch } from 'react-redux'
import { List, ListItem, ListItemIcon } from '@material-ui/core'

import { setIsSearchDrawerOpen } from 'store/actions'
import { PaddingTopDown16 } from 'components/PaddingSet'
import { leftBarBottomItemSet, leftBarTopItemSet } from './drawer-menu-items'
import { drawerStyles } from './drawer-styles'

const DrawerLeftBar = () => {
  const classes = drawerStyles()
  const dispatch = useDispatch()

  return (
    <PaddingTopDown16 className={classes.leftBar}>
      <List>
        {leftBarTopItemSet.map(item => (
          <ListItem
            aria-label={item.title}
            button
            className={classes.leftBarListItem}
            key={item.title}
            onClick={() =>
              item.title === 'Search' && dispatch(setIsSearchDrawerOpen(true))
            }>
            <ListItemIcon
              // className={classes.leftBarIcons}
              className={classes.leftBarIcon}>
              {item.icon}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <List>
        {leftBarBottomItemSet.map(item => (
          <ListItem
            aria-label={item.title}
            className={classes.leftBarListItem}
            key={item.title}
            button>
            <ListItemIcon className={classes.leftBarIcon}>
              {item.icon}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </PaddingTopDown16>
  )
}

export default DrawerLeftBar
