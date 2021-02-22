import { Box, IconButton, makeStyles } from '@material-ui/core'
import {
  ChevronLeft,
  ChevronLeftOutlined,
  ChevronLeftRounded,
  ChevronRightRounded,
} from '@material-ui/icons'
import makeMyStyle from 'styles/makeMyStyle'

const useStyles = makeStyles(theme => ({
  drawer: {
    // width: theme.custom.layout.expandedDrawerWidth,
    // flexShrink: 0,
    // whiteSpace: 'nowrap',
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    transform: 'translateX(+50%)',
  },
}))
const DrawerToggleButton = ({ isOpen, setIsOpen }) => {
  console.log(isOpen)
  const classes = useStyles()
  return (
    <Box className={classes.drawer}>
      <IconButton
        size="small"
        type="span"
        component="span"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronLeftRounded /> : <ChevronRightRounded />}
      </IconButton>{' '}
    </Box>
  )
}

export default DrawerToggleButton
