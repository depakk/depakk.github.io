import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';

const token = process.env.REACT_APP_MAPBOX_TOKEN;
const mapStyle = 'mapbox://styles/depak/ck9urrbp209v11io4yrhs77o7';

const placeToLocationMapping = {
  colombo: { latitude: 6.910925, longitude: 79.854222 },
  columbus: { latitude: 40.001885, longitude: -83.019685 },
  'san francisco': { latitude: 37.774929, longitude: -122.419418 },
  cmu: { latitude: 40.4451, longitude: -79.9454 },
};

const styles = (theme) => ({
  map: {
    height: '100%',
    width: '100%',
  },
});

class Map extends Component {
  constructor(props) {
    super(props);
    const { place } = this.props.match.params;
    const location = placeToLocationMapping[place];
    this.state = {
      location,
      viewport: {
        width: '100%',
        height: '100%',
        longitude: location.longitude,
        latitude: location.latitude,
        zoom: 13,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
      },
    };
  }

  componentDidMount() {
    const { history } = this.props;

    this.unlisten = history.listen(({ pathname }) => {
      const tokenizedPath = pathname.split('/');
      if (tokenizedPath[1] === 'map') {
        const { viewport } = this.state;
        const place = tokenizedPath[2];
        const location = placeToLocationMapping[place];

        this.setState({
          location,
          viewport: {
            ...viewport,
            longitude: location.longitude,
            latitude: location.latitude,
            transitionDuration: 1000,
            transitionInterpolator: new FlyToInterpolator(),
          },
        });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getLocationFromRoute() {
    const { place } = this.props.match.params;
    return placeToLocationMapping[place];
  }

  onViewportChange = (viewport) => {
    this.setState({
      viewport: {
        ...viewport,
        transitionInterpolator: new FlyToInterpolator(),
      },
    });
  };

  render() {
    const { viewport, location } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.map}>
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => {
            this.onViewportChange(nextViewport);
          }}
          mapStyle={mapStyle}
          mapboxApiAccessToken={token}
        >
          <Marker latitude={location.latitude} longitude={location.longitude}>
            <LocationOnIcon fontSize="large" style={{ fill: '#d95040' }} />
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Map);
