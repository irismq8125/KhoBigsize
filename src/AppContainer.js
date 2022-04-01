import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './App/Screens/Home/index';
import Notification from './App/Screens/Notification';
import Cart from './App/Screens/Cart/index';
import AboutMe from './App/Screens/AboutMe/index';
import { RootNavigation } from './App/Screens/Components/RootNavigation';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Notification' component={Notification}/>
            <Stack.Screen name='Cart' component={Cart}/>
            <Stack.Screen name='AboutMe' component={AboutMe}/>
        </Stack.Navigator>
    );
}

const AppContainer = () => {

  return (
    <NavigationContainer ref={RootNavigation}>
      <AppStack></AppStack>
    </NavigationContainer>
  )
}

export default AppContainer