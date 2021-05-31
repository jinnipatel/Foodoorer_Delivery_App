import { Item } from 'native-base';
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {Text, View,Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Header, Label, SearchBar} from '../../component';
import Routes from '../../routes/routes';
import {Color, CommonStyle, ThemeUtils} from '../../utils';





export class TotalOrderScreen extends Component {

 

  render() {
    return (
      <View>
        {/* <Header
          Headertext="OrderDetails"
          name="chevron-back"
          iconName="notifications"
          onPress={() => this.props.navigation.push(Routes.Home)}
        /> */}

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: Color.BOX_BG,
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.push(Routes.Deliverd)}>
            <Label large>Deliverd</Label>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push(Routes.Cancelled)
            }>
            <Label large>Canceled</Label>
          </TouchableOpacity>
          <View style={CommonStyle.order_details_border}>
            <Label align="center" color={Color.PRIMARY} large>
              Total
            </Label>
          </View>
        </View>

        <View>
          <SearchBar/>
        </View> */}

        <View>
          <FlatList
            data={[
                {
                  id:1,
                  OrderId:"ORD12456789 - COMPLETED",
                  price:"Rs. 520/-",
                  date:"Nove 20,2020",
                  icon:require("../../assets/Img/time_logo.png"),
                  time:"11:30"
                },
                {
                  id:2,
                  OrderId:"ORD12456789 - COMPLETED",
                  price:"Rs. 520/-",
                  date:"Nove 20,2020",
                  icon:require("../../assets/Img/time_logo.png"),
                  time:"11:30"
                },
                {
                  id:3,
                  OrderId:"ORD12456789 - COMPLETED",
                  price:"Rs. 520/-",
                  date:"Nove 20,2020",
                  icon:require("../../assets/Img/time_logo.png"),
                  time:"11:30"
                },
                {
                  id:4,
                  OrderId:"ORD12456789 - COMPLETED",
                  price:"Rs. 520/-",
                  date:"Nove 20,2020",
                  icon:require("../../assets/Img/time_logo.png"),
                  time:"11:30"
                }
            ]}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={{justifyContent:'center',backgroundColor:Color.BOX_BG,marginHorizontal:25,padding:20,marginTop:25}}>
                  <Label large color={Color.PRIMARY_DARK}>{item.OrderId}</Label>
                  <Label>{item.price}</Label>
                
                  <View style={{flexDirection:'row',marginTop:25}}>
                  <Label>{item.date}</Label>
                  <Image source={item.icon}
                  style={{
                    width: 35,
                    height: 35,
                    marginStart:10
                  }}/>
                  <Label>{item.time}</Label>
                  </View>
                  
                 </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent = {()=>{
              return(
                <View style={{width:"90%",marginTop:25,marginBottom:10,alignSelf:"center",borderWidth:1,borderColor:Color.BLACK}}/>
                  
                
              )
            }}
          />
        </View>
      </View>
    );
  }
}

export default TotalOrderScreen;
