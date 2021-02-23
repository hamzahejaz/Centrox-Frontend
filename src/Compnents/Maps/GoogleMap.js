

import React from "react"
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {

  render() {
    
    let lat= parseFloat(this.props.lati);
    let long=parseFloat(this.props.longi);
    console.log("Googlemap values are" ,lat,long)
    return (
    
          <Map
          google={this.props.google}
         
          initialCenter={{
            lng:lat,
            lat: long
          
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
    
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBrD4dY7vAKoyk04HGhnoLscR3bofhpKaI')
})(MapContainer)
