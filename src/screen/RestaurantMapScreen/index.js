import React, {Component} from 'react';
import {View, Modal, Image} from 'react-native';
import {
  Button,
  Header,
  IconButton,
  Label,
  SocialButton,
  Status,
} from '../../component';
import Routes from '../../routes/routes';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Color} from '../../utils';
import { FlatList } from 'react-native';

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
      this.setState({show: true});
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
        {/* <Header></Header> */}
        <Status hidden={true} />
        <MapView
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 28.57966,
            longitude: 77.32111,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={{latitude: 28.57966, longitude: 77.32111}} />
        </MapView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.show}
          onRequestClose={() => {
            // this.setState({modelVisible:!this.state.modalVisible})
          }}>
          {/* <Status  hidden={true}/>     */}
          <View
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: 0,
              width: '100%',
              paddingHorizontal: 20,
              paddingVertical: 20,
              // backgroundColor:Color.PRIMARY,
              backgroundColor: '#00FA9A',
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              height: '50%',
            }}>
            <View
              style={{flex: 1, backgroundColor: Color.WHITE, borderRadius: 25}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 50,
                }}>
                <Image
                  source={require('../../assets/Img/boy_logo.jpg')}
                  style={{width: 100, height: 80, alignSelf: 'center'}}
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

                {/* <Button /> */}
                <SocialButton
                  btntext="Picked Up"
                  source={require('../../assets/Img/right_logo.png')}
                  onPress = {()=>this.props.navigation.navigate(Routes.OrderCustomerDetails)}
                  // onPress={() => this.setState({modelshow: true})}
                />

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modelshow}>
                  <View
                    style={{
                      flex:1,
                      backgroundColor: Color.WHITE,
                      borderRadius: 25,
                      margin:15,
                    }}>
                    {/* <Label align="center" mt={15}>ORD12456789</Label>

                    <Label ms={25}>Order</Label>
                    <View
                      style={{
                        borderWidth: 2,
                        borderColor: Color.BLACK,
                        padding: 10,
                        margin: 10,
                        borderRadius: 20,
                      }}>

                         
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Label small>Deal1</Label>
                        <Label small>350</Label>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Label small >Burger</Label>
                        <Label small>70</Label>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Label small>7up Regular 250ml</Label>
                        <Label small>60</Label>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Label small>Delivery Charges</Label>
                        <Label small>40</Label>
                      </View> 
                     <View
                        style={{
                          marginTop: 5,
                          height: 2,
                          width: '100%',
                          backgroundColor: Color.BLACK,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Label small>Total</Label>
                        <Label small>520</Label>
                      </View>
                    </View>

                    <Label ms={25}>Location</Label>
                    <View
                      style={{
                        borderWidth: 2,
                        borderColor: Color.BLACK,
                        padding: 10,
                        margin: 10,
                        borderRadius: 20,
                      }}>
                      <Label small>Location: 11/B,Vesu Surat-396450</Label>
                    </View>

                    <Label ms={25}>Customer</Label>
                    <View
                      style={{
                        borderWidth: 2,
                        borderColor: Color.BLACK,
                        padding: 10,
                        margin: 10,
                        borderRadius: 20,
                      }}>
                      <Label small>Name: Vishal Mistry</Label>
                      <Label small>Phone: +91 70434 436801</Label>
                    </View>

                    <Label ms={25}>Payment</Label>
                    <View
                      style={{
                        borderWidth: 2,
                        borderColor: Color.BLACK,
                        padding: 10,
                        margin: 10,
                        borderRadius: 20,
                        flexDirection:'row'
                      }}>
                      <Label small>Payment</Label>
                      <Label  small  ms={55} align="center">Online</Label>
                    </View>
                    <View>
                      <Label align="center">Time</Label>
                      <Label align="center">11:10</Label>
                    </View>
                       <View style={{justifyContent:'center',alignItems:'center'}}>
                       <SocialButton btntext="start"
                        source={require('../../assets/Img/right_logo.png')}
                        onPress={() => this.props.navigation.navigate(Routes.CustomerMapScreen)} />
                       </View> */}
                  </View>
                </Modal>

                {/* <IconButton btn-sl/> */}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default RestaurantMapScreen;
