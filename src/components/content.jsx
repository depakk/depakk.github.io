import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import About from './about';
import Map from './map';
import Timeline from './timeline';

const Content = () => (
  <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
    <Switch>
      <Redirect exact from="/" to="/about" />
      <Route path="/about" component={About} />
      <Redirect exact from="/timeline" to="/timeline/1" />
      <Route path="/timeline/:chapter" component={Timeline} />
      <Route path="/map/:place" component={Map} />
    </Switch>
  </Grid>
);

export default Content;
