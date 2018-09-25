import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'nachos-ui';
import { createStackNavigator } from 'react-navigation';
import Slider from './components/Slider';

import RouteStack from './routes';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <RouteStack/>
      </ThemeProvider>
    );
  }
}
