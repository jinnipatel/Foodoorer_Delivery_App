import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Routes from '../../routes/routes';
import EarningScreen from '../../screen/EarningScreen';
import DaliyEarning from '../../screen/EarningScreen/DaliyEarning';
import MonthlyEarning from '../../screen/EarningScreen/MonthlyEarning';

const Tab = createMaterialTopTabNavigator();

export default function TopNavEarning() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Daliy" component={DaliyEarning} />
          <Tab.Screen name="Quarterly" component={EarningScreen}/>
          <Tab.Screen name="Monthly" component={MonthlyEarning}/>
        </Tab.Navigator> 
    )
}



