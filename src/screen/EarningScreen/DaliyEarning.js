import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text, View, Image } from 'react-native';
import { Header, Label, Status } from '../../component';
import { Color, ThemeUtils } from '../../utils';
import Style from './Style';


export class DaliyEarning extends Component {
  render() {
    return (
      <SafeAreaView>
        <Status hidden={true} />
        <View>
          <FlatList
            data={[
              {
                id: 1,
                date: '15/04/2020',
                orderid: 'Order #886402',
                img: require('../../assets/Img/salary.png'),
                price: 'Rs.40',
              },
              {
                id: 2,
                date: '15/04/2020',
                orderid: 'Order #886402',
                img: require('../../assets/Img/salary.png'),
                price: 'Rs.40',
              },
              {
                id: 3,
                date: '15/04/2020',
                orderid: 'Order #886402',
                img: require('../../assets/Img/salary.png'),
                price: 'Rs.40',
              },
              {
                id: 4,
                date: '15/04/2020',
                orderid: 'Order #886402',
                img: require('../../assets/Img/salary.png'),
                price: 'Rs.40',
              },
              {
                id: 5,
                date: '15/04/2020',
                orderid: 'Order #886402',
                img: require('../../assets/Img/salary.png'),
                price: 'Rs.40',
              },
            ]}
            renderItem={({ item }) => (
              <View >
                <View
                  style={Style.MainContainer}>
                  <Image
                    resizeMode="contain"
                    source={item.img}
                    style={{
                      width: ThemeUtils.relativeHeight(10),
                      height: ThemeUtils.relativeHeight(10),
                    }}

                  />
                  <View>
                    <Label>{item.date}</Label>
                    <Label>{item.orderid}</Label>
                  </View>
                  <Label>{item.price}</Label>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default DaliyEarning
