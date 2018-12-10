import React from 'react';

class Map extends React.Component {

  componentDidMount(){
    var mcm = {lat: 40.742592, lng: -73.997613};
    var map = new window.google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: mcm});
    var marker = new window.google.maps.Marker({position: mcm, map: map});
  }

  render() {
    return(
      <div id="map"></div>
    );
  }

}

export default Map;