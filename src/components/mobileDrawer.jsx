import React, { Component } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Link,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

import { linkedinUrl, places, resumeUrl } from '../static/constants';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerHeader: {
    display: 'flex',
    listStyleType: 'none',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
    alignItems: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  nameHeadingLeft: {
    marginRight: 'auto',
    padding: theme.spacing(0, 1),
  },
});

class MobileDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileOpen: false };
  }

  handleDrawerToggle = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  capitalizePlace = (place) => {
    let capitalizedPlace;

    if (place === 'cmu') {
      capitalizedPlace = place.toUpperCase();
    } else {
      capitalizedPlace = place
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    }

    return capitalizedPlace;
  };

  isSelected(topic) {
    const {
      location: { pathname },
    } = this.props;
    const regExp = new RegExp(topic);

    return regExp.test(pathname);
  }

  render() {
    const { classes } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <div className={classes.drawerHeader}>
          <Typography className={classes.nameHeadingLeft} variant="h6">
            Depak Kumar
          </Typography>
          <span>
            <IconButton onClick={this.handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </span>
        </div>
        <Divider />
        <MenuList>
          <MenuItem
            button
            to="/about/"
            component={RouterLink}
            selected={this.isSelected('about')}
            onClick={this.handleDrawerToggle}
          >
            About Me
          </MenuItem>
        </MenuList>
        <Divider />
        <MenuList>
          <MenuItem
            button
            to="/timeline/1"
            component={RouterLink}
            selected={this.isSelected('timeline')}
            onClick={this.handleDrawerToggle}
          >
            Timeline
          </MenuItem>
        </MenuList>
        <Divider />
        <MenuList>
          <MenuItem
            button
            color="inherit"
            component={Link}
            target="_blank"
            href={linkedinUrl}
            onClick={this.handleDrawerToggle}
          >
            LinkedIn
          </MenuItem>
          <MenuItem
            button
            color="inherit"
            component={Link}
            target="_blank"
            href={resumeUrl}
            onClick={this.handleDrawerToggle}
          >
            Resume
          </MenuItem>
        </MenuList>
        <Divider />
        <MenuList>
          <MenuItem disabled>
            Places I&apos;ve called &lsquo;Home&rsquo;
          </MenuItem>
          {places.map((place) => (
            <MenuItem
              key={place}
              component={RouterLink}
              to={`/map/${place}`}
              selected={this.isSelected(place)}
              onClick={this.handleDrawerToggle}
            >
              {this.capitalizePlace(place)}
            </MenuItem>
          ))}
        </MenuList>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer} aria-label="mailbox folders">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(MobileDrawer)
);
