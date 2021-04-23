import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './home/HomeScreen';
import LoginScreen from './login/LoginScreen';
import ShoppingCartScreen from './shoppingCart/ShoppingCartScreen';
import ShoppingCartContextProvider from '../data/ShoppingCartContext';

const LOGIN_SCREEN = "התחברות"
const HOME_SCREEN = "Home"
const SHOPPING_CART = "Shopping Cart"

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
        <Tabs.Screen name={SHOPPING_CART} component={ShoppingCartScreen} />
      </Tabs.Navigator>
    </ShoppingCartContextProvider>
  )
}

export default AppNavigation;
export { HOME_TABS }