import React from 'react';
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  StyleSheet
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
//import {GradientButton} from '../../components/'

export class Screen1 extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (   
      <View>
        <RkText rkType='h1'>Screen 1</RkText>
      </View>       
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  footer: {
    justifyContent: 'flex-end'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})