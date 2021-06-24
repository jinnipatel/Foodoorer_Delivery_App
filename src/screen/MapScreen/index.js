// // // import { View } from 'native-base';
// // // import React, { useState, useEffect } from 'react';
// // // // import Styled from 'styled-components/native';
// // // import MapView, { Marker } from 'react-native-maps';
// // // import Geolocation from 'react-native-geolocation-service';





// // // const MapScreen = () => {
// // //   const [location, setLocation] = useState({
// // //     latitude: 37.78825,
// // //     longitude: -122.4324,
// // //   });
// // //   return (
// // //     <View style={{ flex: 1 }}>
// // //       <MapView
// // //         style={{ flex: 1 }}
// // //         initialRegion={{
// // //           latitude: location.latitude,
// // //           longitude: location.longitude,
// // //           latitudeDelta: 0.0922,
// // //           longitudeDelta: 0.0421,
// // //         }}
// // //         onRegionChange={region => {
// // //           setLocation({
// // //             latitude: region.latitude,
// // //             longitude: region.longitude,
// // //           });
// // //         }}
// // //         onRegionChangeComplete={region => {
// // //           setLocation({
// // //             latitude: region.latitude,
// // //             longitude: region.longitude,
// // //           });
// // //         }}>
// // //         <Marker
// // //           coordinate={{
// // //             latitude: location.latitude,
// // //             longitude: location.longitude,
// // //           }}
// // //           title="this is a marker"
// // //           description="this is a marker example"
// // //         />
// // //       </MapView>
// // //     </View>
// // //   );
// // // };

// // // export default MapScreen;

// // import React, { Component } from 'react';
// // import { StyleSheet, View, Text } from 'react-native';
// // // import MapView from 'react-native-maps';
// // import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
// // // import Geolocation from '@react-native-community/geolocation';
// // import { Alert } from 'react-native';
// // import MapViewDirections from 'react-native-maps-directions';
// // import Geolocation from 'react-native-geolocation-service';



// // export default class MapScreen extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       // lat:
// //       latitude: 0,
// //       longitude: 0
// //     }
// //   }

// //   componentDidMount() {
// //     // console.log("navigator.geolocation", navigator.Geolocation);
// //     Geolocation.getCurrentPosition(
// //       (position) => {
// //         console.log(position);
// //         this.setState({
// //           latitude: position.coords.latitude,
// //           longitude: position.coords.longitude,
// //         })
// //       },
// //       (error) => {
// //         // See error code charts below.
// //         console.log(error.code, error.message);
// //       },
// //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
// //     );
// //   }

// //   onRegionChange = () => {
// //     this.setState({ region })
// //   }


// //   render() {
// //     return (
// //       <View style={styles.MainContainer}>
// //         <MapView
// //           style={styles.mapStyle}
// //           showsUserLocation={true}
// //           zoomEnabled={true}
// //           zoomControlEnabled={true}
// //           region={this.state.region}
// //           onRegionChange={this.onRegionChange}
// //           initialRegion={{
// //             latitude: this.state.latitude,
// //             longitude: this.state.longitude,
// //             latitudeDelta: 0.0922,
// //             longitudeDelta: 0.0421,
// //           }}>
// //           <Marker coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} />
// //         </MapView>

// //       </View>
// //     );
// //   }
// // }


// // const styles = StyleSheet.create({
// //   MainContainer: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //   },
// //   mapStyle: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     width: '100%',
// //     height: '100%'
// //   },
// // });


// // import React, { Component } from 'react'
// // import { Text, View } from 'react-native'
// // import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
// // import { StyleSheet } from 'react-native';






// // export class MapScreen extends Component {

// //   state = {
// //     reports: []
// //   }

// //   componentDidMount() {
// //     fetch('https://enigmatic-reaches-55405.herokuapp.com/reports')
// //       .then(res => res.json())
// //       .then(data => {
// //         this.setState({ reports: data.reports })
// //       })
// //       .catch(console.error)
// //   }

// //   mapMarkers = () => {
// //     return this.state.reports.map((report) =>
// //       <Marker
// //         key={report.id}
// //         coordinate={{ latitude: report.lat, longitude: report.lon }}
// //         title={report.location}
// //         description={report.comments}
// //       >
// //       </Marker >)
// //   }

// //   render() {
// //     return (
// //       <MapView
// //         style={styles.MainContainer}
// //         initialRegion={{
// //           latitude: 37.1,
// //           longitude: -95.7,
// //           latitudeDelta: 10,
// //           longitudeDelta: 45
// //         }}>
// //         {this.mapMarkers()}
// //       </MapView>
// //     )
// //   }
// // }

// // const styles = StyleSheet.create({
// //   MainContainer: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //   },
// //   mapStyle: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     width: '100%',
// //     height: '100%'
// //   },
// // });

// // export default MapScreen


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, Alert } from 'react-native';
// import * as Location from 'expo-location';

// const MapScreen = ({ navigation }) => {
//   const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

//   const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
//     'Wait, we are fetching you location...'
//   );

//   useEffect(() => {
//     CheckIfLocationEnabled();
//     GetCurrentLocation();
//   }, []);

//   const CheckIfLocationEnabled = async () => {
//     let enabled = await Location.hasServicesEnabledAsync();

//     if (!enabled) {
//       Alert.alert(
//         'Location Service not enabled',
//         'Please enable your location services to continue',
//         [{ text: 'OK' }],
//         { cancelable: false }
//       );
//     } else {
//       setLocationServiceEnabled(enabled);
//     }
//   };

//   const GetCurrentLocation = async () => {
//     let { status } = await Location.requestPermissionsAsync();

//     if (status !== 'granted') {
//       Alert.alert(
//         'Permission not granted',
//         'Allow the app to use location service.',
//         [{ text: 'OK' }],
//         { cancelable: false }
//       );
//     }

//     let { coords } = await Location.getCurrentPositionAsync();

//     if (coords) {
//       const { latitude, longitude } = coords;
//       let response = await Location.reverseGeocodeAsync({
//         latitude,
//         longitude
//       });

//       for (let item of response) {
//         // console.log(item)
//         let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

//         setDisplayCurrentAddress(address);

//         if (address.length > 0) {
//           setTimeout(() => {
//             navigation.navigate('Home', { item: address });
//           }, 2000);
//         }
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.contentContainer}>
//         <Image source={require('../../assets/Img/geo.png')} style={styles.image} />
//         <Text style={styles.title}>What's your address?</Text>
//       </View>
//       <Text style={styles.text}>{displayCurrentAddress}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#070707',
//     alignItems: 'center',
//     paddingTop: 130
//   },
//   contentContainer: {
//     alignItems: 'center',
//     marginBottom: 20
//   },
//   image: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 20
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FD0139'
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: '400',
//     color: '#fff'
//   }
// });

// export default MapScreen;

import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MapScreen extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default MapScreen
