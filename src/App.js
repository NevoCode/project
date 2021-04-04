import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import 'react-native-gesture-handler';
import AppNavigation from './ui/AppNavigation';

export default function App() {
  return (
    <AppNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
