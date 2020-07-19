import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    // margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'lightpink',
  },

  button: {
    margin: theme.spacing(2),
  },
}))

const Header = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.header}>
      <div>HEADER</div>
      <Button className={classes.button} variant="contained" href="/">
        Homepage
      </Button>
      <Button className={classes.button} variant="contained" href="/dashboard">
        Dashboard
      </Button>
      <Button className={classes.button} variant="contained" href="/team">
        Team
      </Button>
      <Button className={classes.button} variant="contained" href="/terms">
        Terms
      </Button>
    </div>
  )
}

export default Header
