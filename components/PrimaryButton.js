import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo';

class PrimaryButton extends Component {
  render() {
    const {children, ...remainProps} = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={[styles.button, this.props.style]}
      >
        <LinearGradient
          colors={['#3f88fb', '#37a0f6']}
          style={{ padding: 15, alignSelf: 'stretch', alignItems: 'center', borderRadius: 3 }}
        >
          <Text style={styles.text}>
            { children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch'
  },
  text: {
    color: '#fff'
  }
});
