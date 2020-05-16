/* eslint-disable react/prop-types */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
  Grid,
  Hidden,
} from '@material-ui/core';

import Content from './components/content';
import MobileDrawer from './components/mobileDrawer';
import Sidebar from './components/sidebar';
import './App.css';

const styles = (theme) => ({
  root: {
    height: '100vh',
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
    ].join(','),
  },
});

const App = (props) => {
  const { classes } = props;
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container component="main" className={classes.root}>
          <Hidden smDown>
            <Sidebar />
          </Hidden>
          <Hidden mdUp>
            <MobileDrawer />
          </Hidden>
          <Content />
        </Grid>
      </MuiThemeProvider>
    </Router>
  );
};

export default withStyles(styles, { withTheme: true })(App);
