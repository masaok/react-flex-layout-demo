import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
  },
}))

const Footer = props => {
  const classes = useStyles(props)

  return <div className={classes.footer}>FOOTER</div>
}

export default Footer
