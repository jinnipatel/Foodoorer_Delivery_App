import { CommonActions } from '@react-navigation/routers';
import React, { Component } from 'react';
import { Modal, View, Image, TouchableOpacity } from 'react-native';
import {
  Button,
  Card,
  Header,
  InputText,
  Label,
  Section,
  SocialButton,
  Status,
} from '../../component/index';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './style';
import { SafeAreaView } from 'react-native';
import { Color, ThemeUtils } from '../../utils';
import { Col, Switch } from 'native-base';
import color from 'color';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modelshow: false,
      toggle: false,
      location: {
        latitude: 23.033863,
        longitude: 72.585022,
      },
    };
  }
  render() {
    console.log('setonborading Home', this.props.isOnboardingDone);
    return (
      <SafeAreaView>
        <Status hidden={true} />
        <Header
          onPress={() => this.props.navigation.openDrawer()}
          Headertext="DashBoard"
          name="menu"
          iconName="notifications"
          onClick={() => this.props.navigation.navigate(Routes.Notifications)}
        />
        <View>
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
              style={{
                flex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              showsUserLocation={false}
              zoomEnabled={true}
              zoomControlEnabled={true}
              initialRegion={{
                latitude: this.state.location.latitude,
                longitude: this.state.location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                coordinate={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                }}
                title="JOHN DON"
                description="Live Location"
              />
            </MapView>
          </View>
          <View>
            <View
              style={{
                height: ThemeUtils.relativeHeight(20),
                width: ThemeUtils.relativeWidth(90),
                borderRadius: 10,
                backgroundColor: '#fff',
                elevation: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                shadowColor: '#000',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 500,
              }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ flexDirection: 'row', marginRight: 50 }}>
                  <Image
                    source={require('../../assets/Img/profile_logo.png')}
                    resizeMode="contain"
                    style={{
                      width: ThemeUtils.relativeHeight(10),
                      height: ThemeUtils.relativeHeight(10),
                    }}
                  />
                  <View style={{ flexDirection: 'column' }}>
                    <Label ms={20} large color={Color.PRIMARY}>
                      {/* JOHN DON */}
                      {this.props.profile.name}
                    </Label>
                    <Label ms={20} small color={Color.PRIMARY_DARK}>
                      11:30 AM
                    </Label>
                    <Label ms={20} xsmall color={Color.DARK_GRAY}>
                      Location
                    </Label>
                  </View>
                </View>
                <Switch
                  trackColor={{ false: 'gray', true: 'green' }}
                  thumbColor={this.state.toggle ? Color.PRIMARY : Color.BOX_BG}
                  onValueChange={value =>
                    this.setState({
                      toggle: value,
                      show: true,
                    })
                  }
                  value={this.state.toggle}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 10,
                }}>
                <Label small color={Color.PRIMARY_DARK} me={55}>
                  Earned From Last Delivery
                </Label>
                <Label small color={Color.PRIMARY}>
                  Rs.44
                </Label>
              </View>
            </View>
          </View>
        </View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.show}>
          <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
            <View
              style={{
                backgroundColor: Color.WHITE,
                borderRadius: 25,
                paddingHorizontal: 20,
                padding: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 100,
                width: '90%',
              }}>
              <Image
                source={require('../../assets/Img/boy_logo.jpg')}
                resizeMode="contain"
                style={{
                  width: ThemeUtils.responsiveHeight(100),
                  height: ThemeUtils.responsiveHeight(100),
                  alignSelf: 'center',
                }}
              />
              <Label align="center" mb={10} xxlarge color={Color.PRIMARY}>
                New Order
              </Label>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Label large color={Color.PRIMARY_DARK}>
                    Expected Earning
                  </Label>
                  <Label large color={Color.DARK_GRAY}>
                    Rs.40
                  </Label>
                </View>
                <View>
                  <Label large color={Color.PRIMARY_DARK}>
                    Trip Distance
                  </Label>
                  <Label large color={Color.DARK_GRAY}>
                    2.25km
                  </Label>
                </View>
              </View>
              <View style={{ marginTop: 20, justifyContent: 'center' }}>
                <Label xlarge>Restaurant Address</Label>
                <Label small color={Color.DARK_GRAY}>
                  McDonald's Restaurant
                </Label>
                <Label small color={Color.DARK_GRAY}>
                  404 XYZ ,Ahmedabad,Gujarat,India
                </Label>
                <Label small color={Color.DARK_GRAY}>
                  Phone Number : +91 98790 13454
                </Label>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate(Routes.RestaurantMapScreen);
                  }}>
                  <Image
                    source={require('../../assets/Img/yes.png')}
                    resizeMode="contain"
                    style={{
                      width: ThemeUtils.relativeWidth(25),
                      height: ThemeUtils.responsiveHeight(60),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ modelshow: true, show: false })}>
                  <Image
                    source={require('../../assets/Img/no.png')}
                    resizeMode="contain"
                    style={{
                      width: ThemeUtils.relativeWidth(25),
                      height: ThemeUtils.responsiveHeight(60),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal visible={this.state.modelshow} transparent={true}>
          <View
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: ThemeUtils.relativeHeight(50),
                width: ThemeUtils.relativeWidth(90),
                backgroundColor: '#ffffff',
                borderRadius: 10,
              }}>
              <Label
                mt={75}
                large
                align="center"
                color={Color.PRIMARY_DARK}
                me={20}>
                Write Specific Reason for not Delivering the order
              </Label>
              <View style={{ marginTop: 25 }}>
                <InputText placeholder="Type Something Here" />
                <View style={{ marginTop: 20 }}>
                  <Button
                    name="Send"
                    onPress={() => this.props.navigation.push(Routes.Home)}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    '====================UserData==================',
    state.login.user,
  );
  return {
    isOnboardingDone: state,
    profile: state.login.user,
  };
};

export default connect(mapStateToProps, null)(Home);
