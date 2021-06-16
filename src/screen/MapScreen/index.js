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
import Geolocation from "react-native-geolocation-service";
import { Alert } from 'react-native';


export default class MapScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
    };
  }


  componentDidMount() {

    //   Geolocation.getCurrentPosition(
    //     position => {
    //       this.setState({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         coordinates: this.state.coordinates.concat({
    //           latitude: position.coords.latitude,
    //           longitude: position.coords.longitude
    //         })
    //       });
    //     },
    //     error => {
    //       Alert.alert(error.message.toString());
    //     },
    //     {
    //       showLocationDialog: true,
    //       enableHighAccuracy: true,
    //       timeout: 20000,
    //       maximumAge: 0
    //     }
    //   );
    // }

    Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        });
      },
      error => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0
      }
    );
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     latitude: LATITUDE,
  //     longitude: LONGITUDE,
  //     routeCoordinates: [],
  //     distanceTravelled: 0,
  //     prevLatLng: {},
  //     coordinate: new AnimatedRegion({
  //       latitude: LATITUDE,
  //       longitude: LONGITUDE
  //     })
  //   };
  // }

  render() {
    return (
      <View style={styles.MainContainer}>


        {/* <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
          <Button
            title="Get Location"
          />
        </View>
        <Text>Latitude: </Text>
        <Text>Longitude: </Text>
        <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
          <Button
            title="Send Location"
          />
        </View> */}

        {/* <MapView
          style={styles.mapStyle}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 28.579660,
            longitude: 77.321110,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>

          <Marker
            coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
            title={"JavaTpoint"}
            description={"Java Training Institute"}
          />
        </MapView> */}

        <MapView
          provider={PROVIDER_GOOGLE}
          // customMapStyle={mapStyle}
          customMapStyle={styles.mapStyle}
          style={{ flex: 1 }}
          // style={styles.mapStyle}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}>
          </Marker>
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
  },
});