import { makeStyles } from '@material-ui/core'

const searchDrawerWidth = 400

export const searchStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  drawer: {
    width: searchDrawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  paper: {
    overflowX: 'hidden',
  },
}))
