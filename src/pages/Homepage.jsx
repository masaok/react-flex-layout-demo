import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  homepage: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: theme.spacing(2),
  },
}))

const Homepage = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.homepage}>
      HOMEPAGE BEGIN
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>SOME HOMEPAGE STUFF</div>
      <div>END HOMEPAGE STUFF END</div>
    </div>
  )
}

export default Homepage
