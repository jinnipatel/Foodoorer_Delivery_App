import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import SplashScreen from '../screen/SplashScreen';
import NotAuthenticated from './NotAuthenticated';
import Authenticated from './Authenticated';
import boarding from './boarding';


const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.SplashScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
        <Stack.Screen
          name={Routes.NotAuthenticated}
          component={NotAuthenticated}
        />
        <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
        <Stack.Screen name={Routes.boarding} component={boarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
