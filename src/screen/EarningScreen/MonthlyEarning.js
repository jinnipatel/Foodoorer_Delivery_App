import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Text, View, Image} from 'react-native';
import {Header, Label} from '../../component';
import {Color, ThemeUtils} from '../../utils';

export class MonthlyEarning extends Component {
    render() {
        return (
            <SafeAreaView>
            <View>
              <FlatList
                data={[
                  {
                    id: 1,
                    date: '15/04/2020',
                    orderid: 'Order #886402',
                    img: require('../../assets/Img/salary.png'),
                    price: '$6',
                  },
                  {
                    id: 2,
                    date: '15/04/2020',
                    orderid: 'Order #886402',
                    img: require('../../assets/Img/salary.png'),
                    price: '$6',
                  },
                  {
                    id: 3,
                    date: '15/04/2020',
                    orderid: 'Order #886402',
                    img: require('../../assets/Img/salary.png'),
                    price: '$6',
                  },
                  {
                    id: 4,
                    date: '15/04/2020',
                    orderid: 'Order #886402',
                    img: require('../../assets/Img/salary.png'),
                    price: '$6',
                  },
                  {
                    id: 5,
                    date: '15/04/2020',
                    orderid: 'Order #886402',
                    img: require('../../assets/Img/salary.png'),
                    price: '$6',
                  },
                ]}
                renderItem={({item}) => (
                  <View >
                    <View
                      style={{
                         
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        padding: 20,
                        justifyContent: 'space-between',
                        marginTop: 20,
                        borderWidth:2,
                    
                        borderRadius:8,
                        borderColor:Color.PRIMARY_DARK,
                        backgroundColor:Color.WHITE,
                        alignItems:'center',
                        borderStyle:'dashed',
                      }}>
                      <Image
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

export default MonthlyEarning
