import React from "react";
import { Text, View, Image, Keyboard, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from "react-native-ui-kitten";
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';
import Button from '../components/Button';
import { scale, scaleModerate, scaleVertical } from "../utils/scale";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={styles.header}>
          <RkText rkType="xxlarge">AquiZ</RkText>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.buttonFacebook}>
            <Ionicons name="logo-facebook" color="#fff" size={18} />
          </Button>
          <Button style={styles.buttonGoogle}>
            <Ionicons name="logo-googleplus" color="#fff" size={18} />
          </Button>
        </View>
        <View style={styles.content}>
          <View>
            <View style={styles.emailWrapper}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.emailInput} />
            </View>
            <View style={styles.passwordWrapper}>
              <Text style={styles.label}>Mật khẩu</Text>
              <TextInput secureTextEntry={true} style={styles.emailInput} />
            </View>
            <PrimaryButton
              style={styles.save}
            >
              Đăng nhập
            </PrimaryButton>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType="primary3" onPress={() => this.props.navigation.navigate('PasswordRecovery')}>Quên mật khẩu</RkText>
              <RkButton
                rkType="clear"
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <RkText rkType="header6">Đăng ký</RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    padding: scaleVertical(30),
    flex: 1,
    backgroundColor: '#f8fafb',
    justifyContent: "space-between"
  },
  header: {
    paddingTop: 30
  },
  label: {
    color: '#999'
  },
  passwordWrapper: {
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  emailWrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    padding: 15
  },
  emailInput: {
    paddingVertical: 10,
    borderRadius: 5,
    lineHeight: 20,
    borderBottomWidth: 0,
    borderColor: '#ccc'
  },
  content: {
    justifyContent: "space-between"
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    justifyContent: 'space-between',
    alignSelf: "stretch",
    flexDirection: 'row'
  },
  buttonFacebook: {
    minWidth: '47%',
    justifyContent: 'center',
    backgroundColor: '#3F5C99'
  },
  buttonGoogle: {
    minWidth: '47%',
    justifyContent: 'center',
    backgroundColor: '#DC4A38'
  },
  textRow: {
    flexDirection: "row",
    justifyContent: 'space-between'
  }
});
