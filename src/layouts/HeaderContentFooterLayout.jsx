import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  headerContentFooterLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const HeaderContentFooterLayout = props => {
  const classes = useStyles(props)

  const { header: Header, content: Content, footer: Footer, ...rest } = props

  console.log('HEADER CONTENT FOOTER LAYOUT > Header:')
  console.log(Header)

  return (
    <div className={classes.headerContentFooterLayout}>
      {Header ? <Header {...rest} /> : 'HEADER MISSING'}
      {Content ? <Content {...rest} /> : 'CONTENT MISSING'}
      {Footer ? <Footer {...rest} /> : 'FOOTER MISSING'}
    </div>
  )
}

export default HeaderContentFooterLayout
