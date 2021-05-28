import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import {DrawerComponent} from '../component';
import Profile from '../screen/Profile';

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
    </Stack.Navigator>
  );
};

export default Authenticated;
