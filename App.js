import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'nachos-ui';
import { createStackNavigator } from 'react-navigation';
import Slider from './components/Slider';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';

const MainRoute = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <MainRoute/>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHome: {
    fontSize: 30,
    color: '#000'
  }
});
