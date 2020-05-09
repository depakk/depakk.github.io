/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

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

const App = (props) => {
  const { classes } = props;
  return (
    <Router>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Sidebar />
        <Content />
      </Grid>
    </Router>
  );
};

export default withStyles(styles, { withTheme: true })(App);
