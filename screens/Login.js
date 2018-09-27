import React from "react";
import { View, Image, Keyboard, StyleSheet } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme
} from "react-native-ui-kitten";
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';
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
          <Image
            style={styles.image}
            source={require("../assets/images/logo.png")}
          />
          <RkText rkType="light h1">AquiZ</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType="rounded" placeholder="Email" />
            <RkTextInput
              rkType="rounded"
              placeholder="Mật khẩu"
              secureTextEntry={true}
            />
            <PrimaryButton
              style={styles.save}
              onPress={() => {
                this.props.navigation.navigate('App');
              }}
            >
              Đăng nhập
            </PrimaryButton>
          </View>
          <View style={styles.buttons}>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero">
                <Ionicons name="logo-facebook" size={18} color="white" />
              </RkText>
            </RkButton>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero">
                <Ionicons name="logo-googleplus" size={18} color="white" />
              </RkText>
            </RkButton>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero">
                <Ionicons name="logo-twitter" size={18} color="white" />
              </RkText>
            </RkButton>
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
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: "space-between"
  },
  image: {
    height: scaleVertical(77),
    resizeMode: "contain"
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  content: {
    justifyContent: "space-between"
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: "row",
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: "space-around"
  },
  textRow: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  footer: {}
});
