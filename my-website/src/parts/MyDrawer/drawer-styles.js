import { makeStyles } from '@material-ui/core'

export const drawerStyles = makeStyles(theme => {
  console.log(theme.palette.primary, theme.key)
  return {
    root: {
      width: '100%',
      overflowY: 'scroll',
    },
    drawer: {
      width: theme.layout.expandedDrawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    paper: {
      overflowX: 'hidden',
      backgroundColor: theme.palette.secondary.main,
    },
    drawerOpen: {
      transition: theme.transitions.create(['width', 'background-color'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: theme.layout.expandedDrawerWidth,
    },
    drawerClose: {
      transition: theme.transitions.create(['width', 'background-color'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.layout.collapsedDrawerWidth,
      backgroundColor: '',
    },
    drawerToggleButton: {
      position: 'fixed',
      top: 20,
      transform: 'translateX(-50%)',
      backgroundColor: theme.palette.primary.contrastText,
      color: 'black',
      boxShadow: theme.shadows[2],
      zIndex: theme.zIndex.drawer + 1,
      '&:hover': {
        backgroundColor: theme.palette.primary.lighter,
        color: theme.palette.primary.contrastText,
      },
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
    drawerMenuList: {
      transition: theme.transitions.create(['border-left'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      borderLeft: `3px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.contrastText,
    },
    drawerMenuListActive: {
      borderLeft: `3px solid ${theme.palette.primary.light}`,
    },
    drawerMenuListText: {
      textTransform: 'uppercase',
      // fontWeight: 'bold',
    },
    drawerMenuListIcon: {
      minWidth: 40,
      color: 'inherit',
    },
    drawerSubMenuList: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.main,
    },
    leftBar: {
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexShrink: 0,
      height: '100%',
      width: theme.layout.leftBarWidth,
    },
    leftBarIcon: {
      minWidth: 0,
      fontSize: 32,
      color: theme.palette.primary.contrastText,
    },
    leftBarListItem: {
      paddingLeft: 0,
      paddingRight: 0,
      display: 'flex',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
  }
})
