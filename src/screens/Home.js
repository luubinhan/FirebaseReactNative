import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'nachos-ui';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHome}>Home</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')}>Go Login</Button>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHome: {
    fontSize: 30,
    color: '#000'
  }
});
