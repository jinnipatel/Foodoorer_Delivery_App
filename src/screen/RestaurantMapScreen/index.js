import React, { Component } from 'react';
import { View, Modal, Image } from 'react-native';
import {
  Label,
  SocialButton,
  Status,
} from '../../component';
import Routes from '../../routes/routes';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Color } from '../../utils';


export class RestaurantMapScreen extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modelshow: false,
    };
  }

  componentDidMount() {
    this.modelShow();
  }

  modelShow = () => {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  };
  render() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Status hidden={true} />
        <MapView
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 23.033863,
            longitude: 72.585022,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={{ latitude: 23.033863, longitude: 72.585022 }} />
        </MapView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.show}
          onRequestClose={() => {
            // this.setState({modelVisible:!this.state.modalVisible})
          }}>
          <View
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: 0,
              width: '100%',
              paddingHorizontal: 20,
              paddingVertical: 20,
              backgroundColor: Color.PRIMARY,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              height: '50%',
            }}>
            <View
              style={{ flex: 1, backgroundColor: Color.WHITE, borderRadius: 25 }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 50,
                }}>
                <Image
                  source={require('../../assets/Img/boy_logo.jpg')}
                  resizeMode="contain"
                  style={{ width: 100, height: 80, alignSelf: 'center' }}
                />
                <Label xlarge bolder color={Color.PRIMARY_DARK}>
                  Reached at Restaurant
                </Label>
                <Label large mt={5} color={Color.PRIMARY_DARK}>
                  Pick Up Order in{' '}
                </Label>
                <Label mb={10} mt={5} color={Color.DARK_GRAYISH_BLUE}>
                  160 seconds
                </Label>
                <SocialButton
                  btntext="Picked Up"
                  source={require('../../assets/Img/right_logo.png')}
                  onPress={() => this.props.navigation.navigate(Routes.OrderCustomerDetails)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>

    );
  }
}

export default RestaurantMapScreen;
