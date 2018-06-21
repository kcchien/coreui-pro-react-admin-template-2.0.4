import React, {Component} from 'react';
import {Card, CardHeader, CardBody, NavLink} from 'reactstrap';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const defaultZoom = 11;
const defaultCenter = {lat: 37.431489, lng: -122.163719};
const locations = [
  {
    lat: 37.431489,
    lng: -122.163719,
    label: 'S',
    draggable: false,
    title: 'Stanford',
    www: 'https://www.stanford.edu/'
  },
  {
    lat: 37.394694,
    lng: -122.150333,
    label: 'T',
    draggable: false,
    title: 'Tesla',
    www: 'https://www.tesla.com/'
  },
  {
    lat: 37.331681,
    lng: -122.030100,
    label: 'A',
    draggable: false,
    title: 'Apple',
    www: 'https://www.apple.com/'
  },
  {
    lat: 37.484722,
    lng: -122.148333,
    label: 'F',
    draggable: false,
    title: 'Facebook',
    www: 'https://www.facebook.com/'
  }
];

class MarkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return locations.map((location, index) => {
        return (
          <MarkerWithInfoWindow key={index.toString()} location={location}/>
        )
      }
    );
  }
}

class MarkerWithInfoWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {location} = this.props;

    return (
      <Marker onClick={this.toggle} position={location} title={location.title} label={location.label}>
        {this.state.isOpen &&
        <InfoWindow onCloseClick={this.toggle}>
          <NavLink href={location.www} target="_blank">{location.title}</NavLink>
        </InfoWindow>}
      </Marker>
    )
  }
}

const GoogleMapsComponent = withScriptjs(withGoogleMap((props) => {
    return (
      <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
        {<MarkerList locations={locations}/>}
      </GoogleMap>
    );
  }
));

class ReactGoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app

  render() {
    return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <i className="icon-map"></i> React Google Maps{' '}
          <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
          <div className="card-header-actions">
            <a href="https://github.com/tomchentw/react-google-maps" rel="noreferrer noopener" target="_blank" className="card-header-action">
              <small className="text-muted">docs</small>
            </a>
          </div>
        </CardHeader>
        <CardBody>
          <GoogleMapsComponent
            key="map"
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA"
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{height: `400px`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
          />
        </CardBody>
      </Card>
    </div>
    )
  }
}

export default ReactGoogleMaps;
