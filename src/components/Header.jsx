import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
  },
}))

const Header = props => {
  const classes = useStyles(props)

  return <div className={classes.header}>HEADER</div>
}

export default Header
