import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  headerContentFooterLayout: {
    // display: 'flex',
    // flexDirection: 'column',
    // flex: 1,
    // height: '100vh', // required to fill screen vertically
    // justifyContent: 'center',
    // maxHeight: '100vh',
  },

  grid: {
    display: 'grid',
    // gridTemplateColumns: '1fr',
    // width: '100vw',
    height: '100vh',
  },

  content: {
    overflowX: 'hidden', // required to scroll content area

    // TODO: If content does not fill the content area; it hovers in the vertical middle weird
    display: 'flex',
    flex: 1,
  },
}))

const HeaderContentFooterLayout = props => {
  const classes = useStyles(props)

  const { header: Header, content: Content, footer: Footer, ...rest } = props

  console.log('HEADER CONTENT FOOTER LAYOUT > Header:')
  console.log(Header)

  return (
    <div className={classes.headerContentFooterLayout}>
      <div className={classes.grid}>
        <div className={classes.header}>{Header ? <Header {...rest} /> : 'HEADER MISSING'}</div>
        <div className={classes.content}>{Content ? <Content {...rest} /> : 'CONTENT MISSING'}</div>
        <div className={classes.footer}>{Footer ? <Footer {...rest} /> : 'FOOTER MISSING'}</div>
      </div>
    </div>
  )
}

export default HeaderContentFooterLayout
