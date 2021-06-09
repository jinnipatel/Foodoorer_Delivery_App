import { View } from 'native-base';
import React, {useState,useEffect} from 'react';
// import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';




// interface IGeolocation {
//   latitude: number;
//   longitude: number;
// }



const MapScreen = () => {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <View style={{flex:1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={region => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
        onRegionChangeComplete={region => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="this is a marker"
          description="this is a marker example"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;