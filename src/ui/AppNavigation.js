import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home/HomeScreen';
import LoginScreen from './login/LoginScreen';
import ShoppingCartScreen from './shoppingCart/ShoppingCartScreen';
import DashboardScreen from './dashboard/DashboardScreen';
import ShoppingCartContextProvider from '../data/ShoppingCartContext';

const LOGIN_SCREEN = "התחברות"
const HOME_SCREEN = "Home"
const SHOPPING_CART = "Shopping Cart"
const DASHBOARD = "Dashboard"

const HOME_TABS = "tabs"  //TODO: pass user name

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  // connected = AsyncStorage.getItem("isConnected", false)
  // const userName = AsyncStorage.getItem("userName", "")
  const [isConnected, setIsConnected] = useState(false)

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={HOME_TABS} component={HomeTabs} options={({ route }) => ({ title: 'שלום ' + route.params.name })} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeTabs = () => {
  return (
    <ShoppingCartContextProvider>
      <Tabs.Navigator
      screenOptions={({route})=> ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === HOME_SCREEN) {
            iconName = focused
              ? 'list-circle'
              : 'list-circle-outline';
          } else if (route.name === SHOPPING_CART) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === DASHBOARD){
            iconName = focused ? 'calculator-outline' : 'calculator';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
        <Tabs.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Tabs.Screen name={SHOPPING_CART} component={ShoppingCartScreen} />
        <Tabs.Screen name={DASHBOARD} component={DashboardScreen} />
      </Tabs.Navigator>
    </ShoppingCartContextProvider>
  )
}

export default AppNavigation;
export { HOME_TABS }