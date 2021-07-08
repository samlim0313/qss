/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  footer: {
    backgroundColor: '#222',
  },
  footerContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container fixed maxWidth='sm'>
          {children}
        </Container>
      </Box>
      <Box className={classes.footer}>
        <Container fixed maxWidth='sm' className={classes.footerContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5811.5320428043515!2d-71.08632159849083!3d42.36317177056365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5b9258c7b%3A0x333c673be2669ef7!2sOne%20Broadway%2C%201%20Broadway%2014th%20floor%2C%20Cambridge%2C%20MA%2002142!5e0!3m2!1sen!2sus!4v1625692369673!5m2!1sen!2sus" width="100%" maxwidth="400" height="300" style={{border:'2px solid'}} allowFullScreen="" loading="lazy" title="google maps"></iframe>
          <Typography align='center'>
            <br/>
            © {new Date().getFullYear()} Q Shipipng Solutions LLC
          </Typography>
        </Container>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
