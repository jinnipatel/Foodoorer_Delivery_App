import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import {Modal, View,Image} from 'react-native';
import {
  Button,
  Card,
  Header,
  Label,
  Section,
  SocialButton,
  Status,
} from '../../component/index';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './style';
import {SafeAreaView} from 'react-native';
import {Color, ThemeUtils} from '../../utils';
import { Col } from 'native-base';
import color from 'color';



export class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modelshow:false
    };
  }

  resetStack = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.SplashScreen}],
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
    return (
      <SafeAreaView>
        <Status hidden={true} />
        <Header
          onPress={() => this.props.navigation.openDrawer()}
          Headertext="DashBoard"
          name="menu"
          iconName="notifications"
          onClick={() => this.setState({show: true})}
        />
        <View style={Styles.cardContainer}>
          <Card name="card" label="NewOrder" />
          <Card
            label="ActiveOrder"
            img={require('../../assets/Img/google_logo.png')}
          />
        </View>

        <View style={Styles.cardContainer}>
          <Card name="card" label="DeliverOrder" />
          <Card label="TotalOrder" />
        </View>

        <View style={Styles.cardContainer}>
          <Card name="card" label="Earning" />
          <Card label="Review" />
        </View>

        {/* <Button name="Logout" onPress={() => this.removeAuthentication()} /> */}

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.show}
          >
            <View  style={{flex:1,backgroundColor:Color.WHITE,borderRadius:25,margin:25}}>
             <Image source={require("../../assets/Img/boy_logo.jpg")} style={{width:100,height:100,alignSelf:'center',margin:25,marginTop:50}}/>
             <Label mt={20} align="center" xxlarge color={Color.PRIMARY}>New Order</Label>
             <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
               <View>
               <Label large color={Color.PRIMARY_DARK}>Expected Earning</Label>
               <Label large color={Color.DARK_GRAY} >$8</Label>
               </View>
               <View>
                 <Label large color={Color.PRIMARY_DARK}>Trip Distance</Label>
                 <Label large color={Color.DARK_GRAY}>2.25km</Label>
               </View>
             </View>
             <View style={{marginTop:30,justifyContent:'center'}}>
               <Label ms={25} xlarge>Restaurant Address</Label>
               <Label ms={30} mt={30} small color={Color.DARK_GRAY}>McDonald's Restaurant</Label>
               <Label ms={30} small color={Color.DARK_GRAY}>404 XYZ ,Ahmedabad,Gujarat,India</Label>
               <Label ms={30} small color={Color.DARK_GRAY} > Phone Number : +91 98790 13454</Label>
             </View>
            
             <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  // paddingBottom: 15,
                  marginTop:20
                }}>
                <SocialButton
                  btntext="Accept"
                  onPress={()=>this.props.navigation.navigate(Routes.RestaurantMapScreen)}
                  source = {require('../../assets/Img/right_logo.jpeg')}
                  // source={require('../../assets/Img/facebook_logo.png')}
                />
                <SocialButton
                  btntext="Decline"
                  source={require('../../assets/Img/cancel_logo.jpeg')}
                  onPress={()=>this.setState({modelshow:true,show:false})}
                  // source={require('../../assets/Img/google_logo.png')}
                />
                    {/* <Modal
            animationType={'slide'}
            transparent={true}
            visible={this.state.modelshow}>
          <View style={{ alignSelf:'center',
            position:'absolute',
            // bottom:0,
            width:'100%',
            paddingHorizontal:20,
            paddingVertical:20,
            // backgroundColor:Color.PRIMARY,
            backgroundColor:Color.BOX_BG,
            borderTopStartRadius:20,
            borderTopEndRadius:20}}>
            <Label>
              Tell Us Why?
            </Label>
            
          </View>
        </Modal> */}
              </View>
              
            </View>
          {/* <View
            style={{
              flex: 1,
              backgroundColor: Color.WHITE,
              borderRadius: 25,
              margin:15,
            }}>
            <Label align="center">
              ORD12456789
            </Label>

            <Label ms={25}>
              Order
            </Label>
            <View
              style={{
                borderWidth: 2,
                borderColor: Color.BLACK,
                padding: 15,
                margin: 20,
                borderRadius: 20,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Label>Deal1</Label>
                <Label>350</Label>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Label>Burger</Label>
                <Label>70</Label>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Label>7up Regular 250ml</Label>
                <Label>60</Label>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Label>Delivery Charges</Label>
                <Label>40</Label>
              </View>
              <View
                style={{
                  marginTop: 10,
                  height: 2,
                  width: '100%',
                  backgroundColor: Color.BLACK,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Label>Total</Label>
                <Label>520</Label>
              </View>
            </View>

            <Label ms={25}>Location</Label>
            <View style={{ borderWidth: 2,
                borderColor: Color.BLACK,
                padding: 15,
                margin: 20,
                borderRadius: 20,}}>
              <Label>Location: 11/B,Vesu Surat-396450</Label>
            </View>

            <Label ms={25}>Customer</Label>
            <View style={{
               borderWidth: 2,
               borderColor: Color.BLACK,
               padding: 15,
               margin: 20,
               borderRadius: 20,
            }}>
              <Label>Name: Vishal Mistry</Label>
              <Label>Phone: +91 70434 436801</Label>
            </View>

            <Label ms={25}>Payment</Label>
            <View style={{ borderWidth: 2,
                borderColor: Color.BLACK,
                padding: 15,
                margin: 20,
                borderRadius: 20,}}>
              <Label>Payment</Label>
              <Label>Online</Label>
            </View>
            <View>
              <Label>Time</Label>
              <Label>11:10</Label>
            </View>
            <View>

            </View>

          </View> */}
        </Modal>

        
        <Modal
            animationType={'slide'}
            transparent={true}
            visible={this.state.modelshow}>
          <View style={{ alignSelf:'center',
            position:'absolute',
            bottom:0,
            width:'100%',
            paddingHorizontal:20,
            paddingVertical:20,
            // backgroundColor:Color.PRIMARY,
            backgroundColor:Color.BOX_BG,
            borderTopStartRadius:20,
            borderTopEndRadius:20}}>
            <View style={{padding:25,marginHorizontal:20}}>
            <Label>
              Tell Us Why?
            </Label>
            <Label>
              Distance Is Too Far
            </Label>
            <Label>
              The Order IS Too Small
            </Label>
            <Label>
              I don't Want To Deliver
            </Label>  
            </View>            
          </View>
        </Modal>
       
      </SafeAreaView>
    );
  }
}
export default Home;
