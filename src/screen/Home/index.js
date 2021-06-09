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
import { connect } from 'react-redux'

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

  resetStack = CommonActions.reset({
    index: 0,
    routes: [{ name: Routes.SplashScreen }],
  });
  removeAuthentication = async () => {
    try {
      console.log('logout');
      await AsyncStorage.clear();
      this.props.navigation.dispatch(this.resetStack);
    } catch (e) {
      console.log(e);
    }
  };




  render() {
    console.log("setonborading Home", this.props.isOnboardingDone)
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
        {/* <Button name="Logout" onPress={() => this.removeAuthentication()} /> */}

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
            {/* <Header></Header> */}
            <Status hidden={true} />
            <MapView
              style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              showsUserLocation={false}
              zoomEnabled={true}
              zoomControlEnabled={true}
              initialRegion={{
                latitude: this.state.location.latitude,
                longitude: this.state.location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              {/* // onRegionChange={region => {
          //   this.setState({
          //     latitude: region.latitude,
          //     longitude: region.longitude,
          //   });
          // }}
          // onRegionChangeComplete={region => {
          //   this.setState({
          //     latitude: region.latitude,
          //     longitude: region.longitude,
          //   }) }}  */}
              <Marker coordinate={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude }}
                title="JOHN DON"
                description="Live Location" />
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
                marginTop: 480,
              }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ flexDirection: 'row', marginRight: 50 }}>
                  <Image
                    source={require('../../assets/Img/profile_logo.png')}
                    resizeMode='contain'
                    style={{
                      width: ThemeUtils.relativeHeight(10),
                      height: ThemeUtils.relativeHeight(10),
                      // marginLeft: 20,
                      // marginRight:50,
                      // marginTop: 10,
                    }}
                  />
                  <View style={{ flexDirection: 'column' }}>
                    <Label ms={20} large color={Color.PRIMARY} >
                      JOHN DON
                  </Label>
                    <Label ms={20} small color={Color.PRIMARY_DARK}>11:30 AM</Label>
                    <Label ms={20} xsmall color={Color.DARK_GRAY}>Location</Label>
                  </View>
                </View>
                <Switch
                  trackColor={{ false: 'gray', true: 'green' }}
                  thumbColor={this.state.toggle ? Color.PRIMARY : Color.BOX_BG}
                  onValueChange={value =>
                    this.setState({
                      toggle: value, show: true
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
                <Label small color={Color.PRIMARY_DARK} me={55} >Earned From Last Delivery</Label>
                <Label small color={Color.PRIMARY}>Rs.44</Label>
              </View>
            </View>
            {/* <View style={{marginHorizontal:20,marginTop:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={require("../../assets/Img/right_logo.png")} style={{width:ThemeUtils.relativeWidth(15),height:ThemeUtils.relativeHeight(10)}} />
                  <Label>80%</Label>
                  <Label>Acceptance</Label>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={require("../../assets/Img/star_logo.png")} style={{width:ThemeUtils.relativeWidth(15),height:ThemeUtils.relativeHeight(10)}} />
                  <Label>4.5</Label>
                  <Label>Rating</Label>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={require("../../assets/Img/close_logo.png")} style={{width:ThemeUtils.relativeWidth(11),height:ThemeUtils.relativeHeight(6)}} />
                 
                  <Label>3</Label>
                  <Label>Cancelled</Label>
                 
                </View>
                
              </View>

            </View>   // safg */}

            {/* <TouchableOpacity></TouchableOpacity> */}
          </View>
        </View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.show}>
          <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
            <View
              style={{
                // backgroundColor:Color.PRIMARY_DARK,
                backgroundColor: Color.WHITE,
                borderRadius: 25,
                // margin: 25,
                // marginHorizontal:50,
                // marginHorizontal:10,
                paddingHorizontal: 20,
                padding: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 100,
                width: "90%"
              }}>
              <Image
                source={require('../../assets/Img/boy_logo.jpg')}
                resizeMode="contain"
                style={{
                  width: ThemeUtils.responsiveHeight(100),
                  height: ThemeUtils.responsiveHeight(100),
                  alignSelf: 'center',
                  // margin: 25,
                  // marginTop: 50,
                }}
              />
              <Label align="center" mb={10} xxlarge color={Color.PRIMARY}>
                New Order
              </Label>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginTop: 30,
                  // backgroundColor:Color.ERROR


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
                <Label xlarge>
                  Restaurant Address
                </Label>
                {/* <Image source={require("../../assets/Img/mcD_logo.png")} style={{width:ThemeUtils.relativeWidth(30),height:ThemeUtils.responsiveHeight(50)}}/> */}
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
                  // paddingBottom: 15,
                  // marginTop: 20,
                  marginTop: 5,
                  marginBottom: 5,
                  // backgroundColor:Color.PRIMARY_DARK
                }}>
                {/* <SocialButton
                  btntext="Accept"
                  textStyle={{fontSize:18,}}
                  onPress={() =>
                    this.props.navigation.navigate(Routes.RestaurantMapScreen)
                  }
                  source={require('../../assets/Img/right_logo.png')}
                />
                <SocialButton
                  btntext="Decline"
                  source={require('../../assets/Img/cancel_logo.png')}
                  onPress={() => this.setState({modelshow: true, show: false})}
                /> */}
                <TouchableOpacity onPress={() => { this.props.navigation.navigate(Routes.RestaurantMapScreen) }}>
                  <Image source={require("../../assets/Img/yes.png")} resizeMode="contain" style={{ width: ThemeUtils.relativeWidth(25), height: ThemeUtils.responsiveHeight(60) }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ modelshow: true, show: false })}>
                  <Image source={require("../../assets/Img/no.png")} resizeMode="contain" style={{ width: ThemeUtils.relativeWidth(25), height: ThemeUtils.responsiveHeight(60) }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal visible={this.state.modelshow} transparent={true}>
          <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: ThemeUtils.relativeHeight(50), width: ThemeUtils.relativeWidth(90), backgroundColor: "#ffffff", borderRadius: 10 }}>
              <Label mt={75} large align="center" color={Color.PRIMARY_DARK} me={20}>
                Write Specific Reason for not Delivering the order
                         </Label>
              <View style={{ marginTop: 25 }}>
                {/* <TextInput placeholder="Type Something Here"/> */}
                <InputText placeholder="Type Something Here" />
                <View style={{ marginTop: 20 }}>
                  <Button name="Send" onPress={() => this.props.navigation.push(Routes.Home)} />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  isOnboardingDone: state.onborading.value
});



export default connect(mapStateToProps, null)(Home);
