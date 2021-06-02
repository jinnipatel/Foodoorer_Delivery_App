import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View ,Image } from 'react-native'
import { Button, Label } from '../../component'
import { Color, ThemeUtils } from '../../utils'
import Icon from 'react-native-vector-icons/Ionicons'
import Routes from '../../routes/routes'
export class OrderCustomerDetails extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={{ flexDirection: 'row',
                    justifyContent:'space-evenly',
                    padding:15,
                    borderRadius: 10,
                    marginTop:10,
                    shadowColor: Color.WHITE,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,}}>
                        <Image source={require("../../assets/Img/time_logo.png")} style={{width:ThemeUtils.relativeWidth(10),height:ThemeUtils.relativeHeight(10)}}/>
                        <View>
                        <Label large color={Color.PRIMARY_DARK}>Order ID#54</Label>
                        <Label small color={Color.DARK_GRAY} >Online Payment</Label>
                        <Label small color={Color.DARK_GRAY}>20jan,2020  10:27AM </Label>
                        </View>
                        <View style={{marginTop:10,marginStart:40}}>
                        <Label large color={Color.PRIMARY_DARK}>24.o2s</Label>
                        <Label small color={Color.DARK_GRAY}>Items:2</Label>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',marginTop:10,marginStart:30}}>
                        {/* <Image source={require("../../assets/Img/person_logo.png")} style={{width:ThemeUtils.relativeWidth(20),height:ThemeUtils.relativeHeight(10)}} /> */}
                        <Icon name="person-circle" size={40} color={Color.PRIMARY_DARK}/>
                        <Label  ms={30} color={Color.PRIMARY_DARK} bolder xlarge>Customer</Label>
                    </View>
 

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginStart:30,marginHorizontal:20}}>
                       <Label large color={Color.PRIMARY_DARK} mt={5}>Charies W.Abeyta</Label>
                       <Icon name="person-circle" size={40}/>
                   </View>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginStart:30,marginHorizontal:20}}>
                       <Label large color={Color.PRIMARY_DARK} mt={5}>4722 Villa Drive</Label>
                       <Icon name="location-sharp" size={40}/>
                   </View>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginStart:30,marginHorizontal:20}}>
                       <Label large color={Color.PRIMARY_DARK} mt={5}>+91 98765 56412</Label>
                       {/* <Icon name="location-sharp" size={40}/> */}
                      <Image source={require("../../assets/Img/call_logo.png")} style={{width:ThemeUtils.relativeWidth(10),height:ThemeUtils.relativeHeight(5)}} />

                   </View>


                   <View style={{flexDirection:'row',marginStart:30,marginTop:10}}>
                        {/* <Image source={require("../../assets/Img/person_logo.png")} style={{width:ThemeUtils.relativeWidth(20),height:ThemeUtils.relativeHeight(10)}} /> */}
                        <Icon name="fast-food-outline" size={40} color={Color.PRIMARY_DARK}/>
                        <Label  ms={30} color={Color.PRIMARY_DARK} bolder xlarge>Food Items</Label>
                    </View>
                


                    <View style={{ 
                    flexDirection: 'row',
                    justifyContent:'space-evenly',
                    padding:15,
                    borderRadius: 10,
                    shadowColor: Color.WHITE,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,}}>
                        <Image source={require("../../assets/Img/pizza_logo.png")} style={{width:ThemeUtils.relativeWidth(25),height:ThemeUtils.relativeHeight(10)}}/>
                        <View>
                        <Label large color={Color.PRIMARY_DARK}>Pizza Margherita</Label>
                        <Label small color={Color.DARK_GRAY} > Experience</Label>
                        <Label small color={Color.DARK_GRAY}>Quantity</Label>
                        </View>
                        <View style={{marginTop:10,marginStart:40}}>
                        <Label large color={Color.PRIMARY_DARK}>8.80s</Label>
                        <Label small color={Color.DARK_GRAY}>Items:2</Label>
                        </View>
                    </View>
                   
                <View style={{ 
                    justifyContent:'space-evenly',
                    padding:10,
                    borderRadius: 10,
                    shadowColor: Color.WHITE,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    // width: ThemeUtils.relativeWidth(95),
                    // height: ThemeUtils.relativeHeight(25),
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:25,marginTop:10}}>
                        <Label large>Subtotal</Label>
                        <Label >$22.00</Label>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:25}}>
                        <Label small>Tax(10.0%)</Label>
                        <Label>$2.20</Label>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:25}}>
                        <Label >Total</Label>
                        <Label>$2.20</Label>
                    </View>
                     <View style={{marginTop:20}}>
                     <Button name="Start" onPress={()=>this.props.navigation.navigate(Routes.CustomerMapScreen)}/>
                     </View>
                </View> 

                    



                </View>
            </SafeAreaView>
        )
    }
}

export default  OrderCustomerDetails
