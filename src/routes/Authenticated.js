import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import {DrawerComponent, TopNav, TopNavEarning} from '../component';
import Profile from '../screen/Profile';
import DocumentScreen from '../screen/DocumentScreen';
import OderDetails, { OrderDetails } from '../screen/OrderDetails';
import CancelledOrderScreen from '../screen/OrderDetails/CancelledOrderScreen';
import TotalOrderScreen from '../screen/OrderDetails/TotalOrderScreen';
import RestaurantMapScreen from '../screen/RestaurantMapScreen';
import CustomerMapScreen from '../screen/CustomerMapScreen';
import DeliverScreen, { EarningScreen } from '../screen/EarningScreen';
import { Color } from '../utils';
import OrderCustomerDetails from '../screen/OrderCustomerDetails'
import Notifications from '../screen/Notifications';
import MapScreen from '../screen/MapScreen';


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
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:Color.PRIMARY,
          },
          headerTintColor:Color.WHITE_SMOKE
        }}
        
      />
      <Stack.Screen
       name={Routes.DocumentScreen}
       component={DocumentScreen}
       options={{
         headerTitleAlign:'center',
         headerTitle:'Document',
         headerStyle: {
          backgroundColor:Color.PRIMARY,
        },
        headerTintColor:Color.WHITE_SMOKE
       }}
       />
       <Stack.Screen
       name={Routes.OderDetails}
       component={TopNav}
       options={{
         headerTitleAlign:'center',
         headerStyle: {
          backgroundColor:Color.PRIMARY,
        },
        headerTintColor:Color.WHITE_SMOKE
       }}/>
       
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
        options={{
          title:"Live Track",
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:Color.PRIMARY,
          },
          headerTintColor:Color.WHITE_SMOKE
        }}
      />
        <Stack.Screen 
        name={Routes.CustomerMapScreen}
        component={CustomerMapScreen}
        options={{
          title:"Live Track",
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:Color.PRIMARY,
          },
          headerTintColor:Color.WHITE_SMOKE
        }}
       />
        <Stack.Screen
        name={Routes.EarningScreen}
        component={TopNavEarning}
        options={{
          headerTitleAlign:'center',
          headerTitle:'Earnings',
          headerStyle: {
            backgroundColor:Color.PRIMARY,
          },
          headerTintColor:Color.WHITE_SMOKE
        }}
       />

       <Stack.Screen 
       name={Routes.OrderCustomerDetails}
       component={OrderCustomerDetails}
       options={
         {
           headerTitle:"Customer Order Details",
          headerStyle: {
            backgroundColor:Color.PRIMARY,
          },
          headerTintColor:Color.WHITE_SMOKE,
          headerTitleAlign:'center'
         }
       } />

       <Stack.Screen 
        name={Routes.Notifications}
        component={Notifications}
        options={{
          headerTitle:"Notifications",
          headerStyle:{
            backgroundColor:Color.PRIMARY,
          },
          headerTintColor:Color.WHITE_SMOKE,
          headerTitleAlign:'center'
        }}/>
        <Stack.Screen  name={Routes.MapScreen}
        component={MapScreen}/>
    </Stack.Navigator>
  );
};

export default Authenticated;
