import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  terms: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const Terms = props => {
  const classes = useStyles(props)

  return <div className={classes.terms}>TERMS</div>
}

export default Terms
