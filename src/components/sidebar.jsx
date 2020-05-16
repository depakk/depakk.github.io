import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import {
  Avatar,
  Box,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import dpizzle from '../static/images/avatar/dpizzle.jpg';
import { linkedinUrl, places, resumeUrl } from '../static/constants';

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(30, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textLine: {
    margin: theme.spacing(1, 0, 0, 0),
  },
  icon: { verticalAlign: 'middle' },
});

class Sidebar extends Component {
  renderColor(topic) {
    const {
      location: { pathname },
    } = this.props;
    const regExp = new RegExp(topic);

    return regExp.test(pathname) ? 'inherit' : 'secondary';
  }

  renderSpecialComponent(topic, topicParam) {
    const { classes } = this.props;
    let specialComponent;
    if (topic === 'about' || topic === 'timeline') {
      specialComponent = (
        <Typography>
          <Link
            to={`/${topic}`}
            className={classes.textLine}
            color={this.renderColor(topic)}
            component={RouterLink}
          >
            {topic === 'about' ? topicParam : topic}
          </Link>
        </Typography>
      );
    } else if (topic === 'map') {
      const color = this.renderColor(topicParam);
      specialComponent = (
        <span key={topicParam}>
          <Link
            to={`/map/${topicParam}`}
            className={classes.textLine}
            component={RouterLink}
            color={color}
          >
            {topicParam !== places[places.length - 1]
              ? topicParam
              : `★${topicParam}`}
          </Link>
          {topicParam !== places[places.length - 1] && <span> | </span>}
        </span>
      );
    }
    return specialComponent;
  }

  renderCareerLink(option) {
    const { classes } = this.props;

    return (
      <Link
        href={option === 'linkedin' ? linkedinUrl : resumeUrl}
        className={classes.icon}
        target="_blank"
        color="secondary"
      >
        {option === 'resume' ? (
          option
        ) : (
          <span>
            hire me!
            <LinkedInIcon color="primary" className={classes.icon} />
          </span>
        )}
      </Link>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar alt="d" src={dpizzle} />
          <Typography component="div">
            <Box
              fontFamily="Helvetica Neue"
              fontWeight="fontWeightLight"
              fontSize="h2.fontSize"
              textAlign="center"
            >
              Depak Kumar
            </Box>
            <Divider variant="middle" />
          </Typography>
          {this.renderSpecialComponent('about', 'a little bit about me')}
          {this.renderSpecialComponent('timeline')}

          <Typography>
            {this.renderCareerLink('linkedin')}
            <span> | </span>
            {this.renderCareerLink('resume')}
          </Typography>

          <Typography className={classes.textLine}>
            {places.map((place) => this.renderSpecialComponent('map', place))}
          </Typography>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Sidebar));
