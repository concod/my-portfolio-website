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
    width: searchDrawerWidth,
    overflowX: 'hidden',
  },
  searchInput: {
    flexGrow: 1,
    marginLeft: 10,
  },
  searchSubheader: {
    textTransform: 'capitalize',
    marginBottom: -20,
    marginTop: 0,
  },
  searchListContainer: {
    marginBottom: -20,
  },
  searchListIcon: {
    paddingRight: 10,
  },
}))
