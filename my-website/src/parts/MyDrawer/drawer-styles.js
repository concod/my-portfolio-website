import { makeStyles } from '@material-ui/core'

export const drawerStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // maxWidth: 200,
    backgroundColor: 'green',
  },
  drawer: {
    width: theme.layout.expandedDrawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  paper: {
    //  overflowY: 'unset ',
    overflowX: 'hidden',
  },
  drawerOpen: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: theme.layout.expandedDrawerWidth,
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.layout.collapsedDrawerWidth,
  },
  drawerToggleButton: {
    position: 'fixed',
    transform: 'translateX(-50%)',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerToggleIconLeft: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.layout.expandedDrawerWidth,
  },
  drawerToggleIconRight: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: theme.layout.collapsedDrawerWidth,
  },
  drawerMenuListIcon: {
    minWidth: 40,
  },
}))
