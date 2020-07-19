import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  homepage: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const Homepage = props => {
  const classes = useStyles(props)

  return <div className={classes.homepage}>HOMEPAGE</div>
}

export default Homepage
