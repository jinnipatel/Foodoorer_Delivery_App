import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Onborading from '../screen/Onborading';
import Routes from './routes';


const Stack = createStackNavigator();

const boarding = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.Onborading} component={Onborading} />
        </Stack.Navigator>
    )
}

export default boarding
