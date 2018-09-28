import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

type ButtonProps = {
  onPress: Function,
  children: React.Node,
  style?: object
};

class Button extends React.Component<ButtonProps, {}> {
  static defaultProps = {
    style: {}
  }
  render() {
    return (
      <TouchableOpacity style={[styles.touch, this.props.style]} onPress={() => this.props.onPress()}>
        <Text style={[styles.button]}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touch: {
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5
  },
  button: {
    padding: 10,
    alignSelf: 'center',
    textAlign: 'center'
  }
});

export default Button;
