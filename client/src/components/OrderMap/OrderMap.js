import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from 'reactstrap'

const mapStyles = {
  width: '100%',
  height: '70vh',
};

export class OrderMap extends Component {
      state = {
       showingInfoWindow: false,  // Hides or shows the InfoWindow
       activeMarker: {},          // Shows the active marker upon click
       selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
     };

     // display the marker information
     onMarkerClick = (props, marker, e) =>{
     this.setState({
       selectedPlace: props,
       activeMarker: marker,
       showingInfoWindow: true
     });
   }

    // closes the marker information
     onClose = props => {
       if (this.state.showingInfoWindow) {
         this.setState({
           showingInfoWindow: false,
           activeMarker: null
         });
       }
     }

  render() {
      return (
        <div>
          <Col>
            <Card>
              <CardBody>
                <div style={{width: '100%', height: '70vh', position: 'relative'}}>
                <Map
                  google={this.props.google}
                  zoom={11}
                  style={mapStyles}
                  initialCenter={
                    {
                    lat: -1.307443,
                    lng: 36.768973
                  }
                }
              >
                <Marker
                  onClick={this.onMarkerClick}
                  name={'Ubrica'}
                />
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
                >
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                  </div>
                </InfoWindow>
              </Map>
              </div>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDIz9I2aJwrVpoP8V3VNW9VrflF-3WeupE'
})(OrderMap);
