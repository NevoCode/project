import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './home/HomeScreen';
import LoginScreen from './login/LoginScreen';
import ShoppingCart from './shoppingCart/ShoppingCart';
import ShoppingCartContextProvider from '../data/ShoppingCartContext';

const LOGIN_SCREEN = "התחברות"
const HOME_SCREEN = "Home"
const SHOPPING_CART = "ShoppingCart"

const HOME_TABS = "רשימת מוצרים"

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  // connected = AsyncStorage.getItem("isConnected", false)
  const [isConnected, setIsConnected] = useState(false)

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={HOME_TABS} component={HomeTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeTabs = () => {
  return (
    <ShoppingCartContextProvider>
      <Tabs.Navigator>
        <Tabs.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Tabs.Screen name={SHOPPING_CART} component={ShoppingCart} />
      </Tabs.Navigator>
    </ShoppingCartContextProvider>
  )
}

export default AppNavigation;
export { HOME_TABS }