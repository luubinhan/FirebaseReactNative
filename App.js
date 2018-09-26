import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading, Font} from 'expo';
import RouteStack from './routes';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'fontawesome': require('./assets/fonts/fontawesome.ttf'),
      'icomoon': require('./assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf')
    });
    this.setState({fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <RouteStack />
    );
  }
}
