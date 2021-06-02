import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text, View,Image} from 'react-native';
import {Header, Label} from '../../component';
import Routes from '../../routes/routes';
import {Color, CommonStyle, ThemeUtils} from '../../utils';


export class OrderDetails extends Component {
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
          <View style={CommonStyle.order_details_border}>
            <Label large align="center" color={Color.PRIMARY}>
              Deliverd
            </Label>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(Routes.Cancelled)
            }>
            <Label large>Canceled</Label>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(Routes.Total);
            }}>
            <Label large>Total</Label>
          </TouchableOpacity>
        </View> */}

        <View>
          <FlatList
            data={[
              {
                id: 1,
                OrderId: 'ORD12456789',
                image: require('../../assets/Img/profile_logo.png'),
                Time:"11:30AM",
                icon:require('../../assets/Img/time_logo.png'),
                TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                Location: '11/B , Vesu surat-396450',
                date:"jan 20,2020"

              },
              {
                id: 2,
                OrderId: 'ORD12456789',
                image: require('../../assets/Img/profile_logo.png'),
                Time:"10:30AM",
                icon:require('../../assets/Img/time_logo.png'),

                TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                Location: '11/B , Vesu surat-396450',
                date:"jan 20,2020"

              },
              {
                id: 3,
                OrderId: 'ORD12456789',
                icon:require('../../assets/Img/time_logo.png'),

                image: require('../../assets/Img/profile_logo.png'),
                Time:"10:30AM",
                
                TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                Location: '11/B , Vesu surat-396450',
                date:"jan 20,2020"

              },
              {
                id: 4,
                OrderId: 'ORD12456789',
                icon:require('../../assets/Img/time_logo.png'),

                image: require('../../assets/Img/profile_logo.png'),
                Time:"10:30AM",
                 
                TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                Location: '11/B , Vesu surat-396450',
                date:"jan 20,2020"

              },
              // {
              //   id: 5,
              //   OrderId: 'ORD12456789',
              //   image: require('../../assets/Img/profile_logo.png'),
              //   Time:"10:30AM",
              //   icon:require('../../assets/Img/time_logo.png'),

              //   TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
              //   Location: '11/B , Vesu surat-396450',
              // },
              // {
              //   id: 6,
              //   OrderId: 'ORD12456789',
              //   image: require('../../assets/Img/profile_logo.png'),
              //   Time:"10:30AM",
              //   icon:require('../../assets/Img/time_logo.png'),
                
              //   TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
              //   Location: '11/B , Vesu surat-396450',
              // },
            ]}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    shadowColor: Color.WHITE,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    width: ThemeUtils.relativeWidth(95),
                    height: ThemeUtils.relativeHeight(25),
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={item.image}
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 20,
                        marginStart: 20,
                      }}
                    />
                    <View style={{marginTop: 10}}>
                      <Label ms={20} mt={10} large color={Color.PRIMARY_DARK} >
                        {item.OrderId}
                      </Label>
                      <Label ms={20} mt={10} small color={Color.DARK_GRAYISH_BLUE}>
                        {item.TotalItem}
                      </Label>
                      <Label ms={20} mt={10} small color={Color.DARK_GRAYISH_BLUE} >
                        {item.Location}
                      </Label>
                      <View style={{flexDirection:'row'}}>
                      <Label ms={20} mt={10} small  color={Color.PRIMARY_DARK}>{item.date}</Label> 
                      <Image source={item.icon} style={{
                        width: 50,
                        height: 50,
                        marginStart:10
                      }}/>
                     <Label  mt={10}>{item.Time}</Label>
                     {/* <Image source={item.icon} style={{
                       width: 50,
                       height: 50,
                       marginStart:100
                      }} /> */}
                     </View>
                    </View>
                    
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

export default OrderDetails;
