import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Routes from '../../../routes/routes';
import OrderDetails from '../../../screen/OrderDetails';
import CancelledOrderScreen from '../../../screen/OrderDetails/CancelledOrderScreen';
import TotalOrderScreen from '../../../screen/OrderDetails/TotalOrderScreen';

const Tab = createMaterialTopTabNavigator();

export default function TopNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Deliverd" component={OrderDetails}/>
            <Tab.Screen name="Cancelled" component={CancelledOrderScreen}/>
            <Tab.Screen name="Total" component={TotalOrderScreen}/>
        </Tab.Navigator> 
    )
}



