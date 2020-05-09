import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import dpizzle from '../static/images/avatar/dpizzle.jpg';

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

const places = ['colombo', 'columbus', 'san francisco', 'cmu'];
const linkedinUrl = 'https://www.linkedin.com/in/depakk/';
const resumeUrl =
  'https://drive.google.com/uc?id=1WWRugcR9_fxNYd3Eaweh9iE7oytIGRlG&export=download';

class Sidebar extends Component {
  getTokenFromPath(index) {
    const { location } = this.props;
    return location.pathname.split('/')[index];
  }

  renderColor = (isSelected) => (isSelected ? 'inherit' : 'secondary');

  renderSpecialComponents(topic, topicParam) {
    const { classes } = this.props;
    let specialComponent;
    if (topic === 'about' || topic === 'timeline') {
      const currentRouteView = this.getTokenFromPath(1);
      specialComponent = (
        <Typography>
          <Link
            to={topic === 'about' ? `/${topic}` : '/timeline/1'}
            className={classes.textLine}
            color={this.renderColor(topic === currentRouteView)}
            component={RouterLink}
          >
            {topic === 'about' ? topicParam : topic}
          </Link>
        </Typography>
      );
    } else if (topic === 'map') {
      const currentPlace = this.getTokenFromPath(2);
      const color = this.renderColor(topicParam === currentPlace);
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
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
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
          {this.renderSpecialComponents('about', 'a little bit about me')}
          {this.renderSpecialComponents('timeline')}

          <Typography>
            {this.renderCareerLink('linkedin')}
            <span> | </span>
            {this.renderCareerLink('resume')}
          </Typography>

          <Typography className={classes.textLine}>
            {places.map((place) => this.renderSpecialComponents('map', place))}
          </Typography>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Sidebar));
