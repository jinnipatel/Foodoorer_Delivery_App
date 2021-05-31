import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import {DrawerComponent, TopNav} from '../component';
import Profile from '../screen/Profile';
import DocumentScreen from '../screen/DocumentScreen';
import OderDetails, { OrderDetails } from '../screen/OrderDetails';
import CancelledOrderScreen from '../screen/OrderDetails/CancelledOrderScreen';
import TotalOrderScreen from '../screen/OrderDetails/TotalOrderScreen';
import RestaurantMapScreen from '../screen/RestaurantMapScreen';
import CustomerMapScreen from '../screen/CustomerMapScreen';
import DeliverScreen, { EarningScreen } from '../screen/EarningScreen';


const Stack = createStackNavigator();

const Authenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        component={DrawerComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
       name={Routes.DocumentScreen}
       component={DocumentScreen}
       options={{
         headerShown:false
       }}/>
       <Stack.Screen
       name={Routes.OderDetails}
       component={TopNav}
       options={{headerShown:true}}/>
       
       <Stack.Screen 
       name={Routes.CancelledOrderScreen}
       component={CancelledOrderScreen}
       options={{headerShown:false}}/>
       <Stack.Screen
       name={Routes.TotalOrderScreen}
       component={TotalOrderScreen}
       options={{headerShown:false}}/>
       <Stack.Screen
        name={Routes.RestaurantMapScreen}
        component={RestaurantMapScreen}
        options={{headerShown:false}}/>
        <Stack.Screen 
        name={Routes.CustomerMapScreen}
        component={CustomerMapScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name={Routes.EarningScreen}
        component={EarningScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default Authenticated;
