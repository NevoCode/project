import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './home/HomeScreen';
import LoginScreen from './login/LoginScreen';

const HOME_STACK = "HomeStack"
const LOGIN_STACK = "LoginStack"

const LOGIN_SCREEN = "Login"
const HOME_SCREEN = "Home"


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation=()=> {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name={HOME_STACK} component={HomeStack}/>
        <Tabs.Screen name={LOGIN_STACK} component={LoginStack}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const LoginStack=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  )
}

const HomeStack=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation;
export {HOME_STACK, LOGIN_STACK, HOME_SCREEN, LOGIN_SCREEN}