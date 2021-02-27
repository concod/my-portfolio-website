import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MyDrawer from 'parts/MyDrawer'
import { Padding16x16, PaddingAxB } from 'components/PaddingSet'
import { Box } from '@material-ui/core'
import SearchDrawer from 'parts/SearchDrawer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // minHeight: theme.custom.layout.appBarHeight
  },
  content: {
    flexGrow: 1,
  },
}))

const Layout = React.forwardRef(({ children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <MyDrawer />

      <main className={classes.content}>
        <Box padding='20px'>{children}</Box>
      </main>
    </Box>
  )
})

export default Layout
