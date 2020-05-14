/* eslint-disable react/prop-types */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Content from './components/content';
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
          <Sidebar />
          <Content />
        </Grid>
      </MuiThemeProvider>
    </Router>
  );
};

export default withStyles(styles, { withTheme: true })(App);
