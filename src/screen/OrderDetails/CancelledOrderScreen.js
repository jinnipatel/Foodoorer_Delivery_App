import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header, Label, Status } from '../../component';
import Routes from '../../routes/routes';
import { Color, CommonStyle, ThemeUtils } from '../../utils';
import * as Animatable from 'react-native-animatable';

export class CancelledOrderScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Status hidden={true} />
        <View>
          <View>
            <FlatList
              data={[
                {
                  id: 1,
                  image: require('../../assets/Img/profile_logo.png'),
                  Time: "11:30AM",
                  icon: require('../../assets/Img/time_logo.png'),
                  OrderId: 'ORD12456789',
                  TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                  Location: '11/B , Vesu surat-396450',
                  date: "jan 20,2020"
                },
                {
                  id: 2,
                  image: require('../../assets/Img/profile_logo.png'),
                  Time: "11:30AM",
                  icon: require('../../assets/Img/time_logo.png'),
                  OrderId: 'ORD12456789',
                  //   image:require("../../assets/Img/jay.png"),
                  TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                  Location: '11/B , Vesu surat-396450',
                  date: "jan 20,2020"
                },
                {
                  id: 3,
                  image: require('../../assets/Img/profile_logo.png'),
                  Time: "11:30AM",
                  icon: require('../../assets/Img/time_logo.png'),
                  OrderId: 'ORD12456789',
                  TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                  Location: '11/B , Vesu surat-396450',
                  date: "jan 20,2020"
                },
                {
                  id: 4,
                  image: require('../../assets/Img/profile_logo.png'),
                  Time: "11:30AM",
                  icon: require('../../assets/Img/time_logo.png'),
                  OrderId: 'ORD12456789',
                  TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                  Location: '11/B , Vesu surat-396450',
                  date: "jan 20,2020"
                },
                {
                  id: 5,
                  image: require('../../assets/Img/profile_logo.png'),
                  Time: "11:30AM",
                  icon: require('../../assets/Img/time_logo.png'),
                  OrderId: 'ORD12456789',
                  TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                  Location: '11/B , Vesu surat-396450',
                  date: "jan 20,2020"
                },
                {
                  id: 6,
                  image: require('../../assets/Img/profile_logo.png'),
                  Time: "11:30AM",
                  icon: require('../../assets/Img/time_logo.png'),
                  OrderId: 'ORD12456789',
                  TotalItem: 'Deal 1 Burger & 7up Regular 250ml',
                  Location: '11/B , Vesu surat-396450',
                  date: "jan 20,2020"
                },
              ]}
              renderItem={({ item }) => (

                <TouchableOpacity>
                  <Animatable.View
                    animation="fadeInLeftBig"
                    iterationDelay={400}
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
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={item.image}
                        style={{
                          width: 50,
                          height: 50,
                          marginTop: 20,
                          marginStart: 20,
                        }}
                        resizeMode="contain"
                      />
                      <View style={{ marginTop: 10 }}>
                        <Label ms={20} mt={10} large color={Color.PRIMARY_DARK}>
                          {item.OrderId}
                        </Label>
                        <Label ms={20} mt={10} small color={Color.DARK_GRAY}>
                          {item.TotalItem}
                        </Label>
                        <Label ms={20} mt={10} small color={Color.DARK_GRAY} >
                          {item.Location}
                        </Label>
                        <View style={{ flexDirection: 'row' }}>
                          <Label ms={20} mt={10} color={Color.PRIMARY_DARK}>{item.date}</Label>
                          <Image source={item.icon} style={{
                            width: 50,
                            height: 50,
                            marginStart: 10
                          }} />
                          <Label mt={10}>{item.Time}</Label>
                        </View>
                      </View>
                    </View>
                  </Animatable.View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default CancelledOrderScreen;
