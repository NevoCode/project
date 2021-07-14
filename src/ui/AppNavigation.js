import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home/HomeScreen';
import HomeScreenBranch from './home/HomeScreenBranch';
import LoginScreen from './login/LoginScreen';
import ShoppingCartScreen from './shoppingCart/ShoppingCartScreen';
import DashboardScreen from './dashboard/DashboardScreen';
import ShoppingCartContextProvider from '../data/ShoppingCartContext';
import WelcomeScreen from './welcome/WelcomeScreen';
import { Alert } from 'react-native';
import ObboardingOne from './onboarding/OnboardingOne';
import ObboardingTwo from './onboarding/OnboardingTwo';
import ObboardingThree from './onboarding/OnboardingThree';


const LOGIN_SCREEN = "Login"
const HOME_SCREEN = "ספקים"
const HOME_SCREEN_BRANCH = "סניפים"

const SHOPPING_CART = "עגלת ספקים"
const SHOPPING_CART_BRANCH = "עגלת סניפים"

const DASHBOARD = "תקציבים"
const WELCOME_SCREEN = "שלום"

const HOME_TABS = "tabs"  //TODO: pass user name

const ONBOARDING_ONE = "קניות"
const ONBOARDING_TWO = "הזמנות"
const ONBOARDING_THREE = "תקציבים"


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  // connected = AsyncStorage.getItem("isConnected", false)
  // const userName = AsyncStorage.getItem("userName", "")
  const [isConnected, setIsConnected] = useState(false)

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={ONBOARDING_ONE} component={ObboardingOne} options={{headerShown: false}}/>
          <Stack.Screen name={ONBOARDING_TWO} component={ObboardingTwo} options={{headerShown: false}}/>
          <Stack.Screen name={ONBOARDING_THREE} component={ObboardingThree} options={{headerShown: false}}/>
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen}/>
          <Stack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} options={({route})=> {
            return { headerTitle: route.params?.name, headerShown: true}}}/>
          <Stack.Screen name={HOME_TABS} component={({route})=> HomeTabs({params: route.params, selectedTab: route.params.selectedTab})} options={({route})=> {
            return { headerTitle: route.params?.name}}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeTabs = ({params, selectedTab}) => {
  return (
    <ShoppingCartContextProvider data={{branchId: params.branchId}}>
      <Tabs.Navigator
      initialRouteName={selectedTab}
      screenOptions={({route, navigation})=> {
        return ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === HOME_SCREEN) {
            iconName = focused
              ? 'list-circle'
              : 'list-circle-outline';
          } else if (route.name === HOME_SCREEN_BRANCH) {
            iconName = focused
              ? 'list-circle'
              : 'list-circle-outline';
          }else if (route.name === SHOPPING_CART) {
            iconName = focused ? 'cart' : 'cart-outline';
          }else if (route.name === SHOPPING_CART_BRANCH) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === DASHBOARD){
            iconName = focused ? 'calculator-outline' : 'calculator';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
        <Tabs.Screen name={HOME_SCREEN} component={HomeScreen} initialParams={{...params}}/>
        <Tabs.Screen name={HOME_SCREEN_BRANCH} component={HomeScreenBranch} initialParams={{...params}}/>
        <Tabs.Screen name={SHOPPING_CART} component={ShoppingCartScreen} initialParams={{...params}}/>
        <Tabs.Screen name={SHOPPING_CART_BRANCH} component={ShoppingCartScreen} initialParams={{...params}}/>
        <Tabs.Screen name={DASHBOARD} component={DashboardScreen} initialParams={{...params}}/>
      </Tabs.Navigator>
    </ShoppingCartContextProvider>
  )
}

export default AppNavigation;
export { LOGIN_SCREEN, HOME_TABS, WELCOME_SCREEN, SHOPPING_CART, DASHBOARD, HOME_SCREEN, ONBOARDING_ONE, ONBOARDING_TWO, ONBOARDING_THREE }