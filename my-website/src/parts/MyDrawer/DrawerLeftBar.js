import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core'
import { ColorLens, ColorLensRounded } from '@material-ui/icons'
import { PaddingTopDown16 } from 'components/PaddingSet'
import { leftBarBottomItmes, leftBarTopItems } from './drawer-menu-items'
import { drawerStyles } from './drawer-styles'

const DrawerLeftBar = () => {
  const classes = drawerStyles()

  return (
    <PaddingTopDown16 className={classes.leftBar}>
      <List>
        {leftBarTopItems.map(item => (
          <ListItem
            className={classes.nestedLeftPadding}
            key={item.title}
            button>
            <ListItemIcon className={classes.leftBarIcon}>
              {item.icon}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <List>
        {leftBarBottomItmes.map(item => (
          <ListItem
            className={classes.nestedLeftPadding}
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
