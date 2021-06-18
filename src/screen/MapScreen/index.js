// import { View } from 'native-base';
// import React, { useState, useEffect } from 'react';
// // import Styled from 'styled-components/native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';





// const MapScreen = () => {
//   const [location, setLocation] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//   });
//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={{
//           latitude: location.latitude,
//           longitude: location.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         onRegionChange={region => {
//           setLocation({
//             latitude: region.latitude,
//             longitude: region.longitude,
//           });
//         }}
//         onRegionChangeComplete={region => {
//           setLocation({
//             latitude: region.latitude,
//             longitude: region.longitude,
//           });
//         }}>
//         <Marker
//           coordinate={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//           }}
//           title="this is a marker"
//           description="this is a marker example"
//         />
//       </MapView>
//     </View>
//   );
// };

// export default MapScreen;

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import MapView from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
// import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';



export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lat:
      latitude: 0,
      longitude: 0
    }
  }

  componentDidMount() {
    // console.log("navigator.geolocation", navigator.Geolocation);
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  onRegionChange = () => {
    this.setState({ region })
  }


  render() {
    return (
      <View style={styles.MainContainer}>
        <MapView
          style={styles.mapStyle}
          showsUserLocation={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} />
        </MapView>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
});