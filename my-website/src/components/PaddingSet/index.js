import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(_ => ({
  padding16x16: {
    padding: 16,
  },
  paddingTop16: {
    paddingTop: 16,
  },
  paddingRight16: {
    paddingRight: 16,
  },
  paddingBottom16: {
    paddingBottom: 16,
  },
  paddingLeft16: {
    paddingLeft: 16,
  },
  paddingTop32: {
    paddingTop: 32,
  },
  paddingRight32: {
    paddingRight: 32,
  },
  paddingBottom32: {
    paddingBottom: 32,
  },
  paddingLeft32: {
    paddingLeft: 32,
  },
  rowMargin16: {
    '& > *:not(:first-child)': {
      marginTop: 16,
    },
  },
  dynamicPadding: {
    display: 'flex',
    alignContent: 'center',
    '& >*:not(:last-child)': {
      paddingRight: ({ right }) => right,
    },
  },
}))

const PaddingLeftRight16 = ({ className, ...rest }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.paddingLeft16, classes.paddingRight16, className)}
      {...rest}
    />
  )
}
const Padding16x16 = ({ className, ...rest }) => {
  const classes = useStyles()

  return <div className={clsx(classes.padding16x16, className)} {...rest} />
}

const PaddingLeftRight32 = ({ className, ...rest }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.paddingLeft32, classes.paddingRight32, className)}
      {...rest}
    />
  )
}

const PaddingTopDown16 = ({ className, ...rest }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.paddingTop16, classes.paddingBottom16, className)}
      {...rest}
    />
  )
}

const PaddingTopDown32 = ({ className, ...rest }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.paddingTop32, classes.paddingBottom32, className)}
      {...rest}
    />
  )
}

const Padding32x16BetweenRow16 = ({ className, ...rest }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(
        classes.paddingLeft32,
        classes.paddingRight32,
        classes.paddingTop16,
        classes.paddingBottom16,
        classes.rowMargin16,
        className,
      )}
      {...rest}
    />
  )
}

const PaddingDynamicBetween = ({ children, right = 0, className }) => {
  const classes = useStyles({ right })
  return (
    <div className={clsx(classes.dynamicPadding, className)}>
      {children.map(child => (
        <div>{child}</div>
      ))}
    </div>
  )
}
export {
  Padding16x16,
  Padding32x16BetweenRow16,
  PaddingLeftRight16,
  PaddingLeftRight32,
  PaddingTopDown16,
  PaddingTopDown32,
  PaddingDynamicBetween,
}
