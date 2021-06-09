import { Item } from 'native-base'
import React, { Component } from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import { FlatList } from 'react-native'
import { Text, View ,Image} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Label, Status } from '../../component'
import { Color, ThemeUtils } from '../../utils'

export class Notifications extends Component {
    render() {
        return (
          <SafeAreaView>
              <Status hidden={true}/>
              <View>
                  <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:20,marginBottom:20,marginHorizontal:20}}>
                      <Icons name="notifications" size={40} />
                      <Label color={Color.PRIMARY_DARK} ms={40} xlarge bolder>Notifications</Label>
                  </View>
 
                  <FlatList
                    data={
                       [
                           {
                               id:1,
                               img:require("../../assets/Img/South_logo.png"),
                               orderid:"Order#54 was assigned to you",
                               date:"20jan,2020"
                           },
                           {
                            id:2,
                            img:require("../../assets/Img/PaniPuri_logo.png"),
                            orderid:"Order#54 was assigned to you",
                            date:"20jan,2020"
                        },
                        {
                            id:3,
                            img:require("../../assets/Img/Panjabi_logo.png"),
                            orderid:"Order#54 was assigned to you",
                            date:"20jan,2020"
                        },
                        {
                            id:4,
                            img:require("../../assets/Img/local_food_logo.png"),
                            orderid:"Order#54 was assigned to you",
                            date:"20jan,2020"
                        },
                        {
                            id:5,
                            img:require("../../assets/Img/pizza_logo.png"),
                            orderid:"Order#54 was assigned to you",
                            date:"20jan,2020"
                        },
                        {
                            id:6,
                            img:require("../../assets/Img/pizza_logo.png"),
                            orderid:"Order#54 was assigned to you",
                            date:"20jan,2020"
                        },
                        {
                            id:7,
                            img:require("../../assets/Img/pizza_logo.png"),
                            orderid:"Order#54 was assigned to you",
                            date:"20jan,2020"
                        }
                       ]
                    }
                    renderItem={({item})=>(
                        <View style={{ 
                        flexDirection: 'row',
                        justifyContent:'space-evenly',
                        padding:20,
                        borderRadius: 10,
                        marginBottom: 10,
                        marginHorizontal: 10,
                        marginVertical: 10,
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
                            <Image source={item.img} resizeMode="contain" style={{width:ThemeUtils.relativeWidth(20),height:ThemeUtils.relativeHeight(10)}}/>
                            <View>
                            <Label small color={Color.PRIMARY_DARK}>{item.orderid}</Label>
                            <Label small color={Color.DARK_GRAY}>{item.date}</Label>
                            </View>
                        </View>
                    )}
                   
                  />

              </View>              
          </SafeAreaView>
        )
    }
}

export default Notifications
