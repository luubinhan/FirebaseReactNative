import React from "react";
import { View, Image, Keyboard } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from "react-native-ui-kitten";
import { GradientButton } from "../components/";
import PrimaryButton from '../components/PrimaryButton';
import { scale, scaleModerate, scaleVertical } from "../utils/scale";

export default class SignUpScreen extends React.Component {
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
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image}
            source={require("../assets/images/logo.png")}
          />
          <RkText rkType="h1">Đăng ký</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType="rounded" placeholder="Email" />
            <RkTextInput
              placeholder="Mật khẩu"
              secureTextEntry={true}
            />
            <PrimaryButton
              style={styles.save}
              onPress={() => {
                this.props.navigation.navigate('App');
              }}
            >
              Đăng ký
            </PrimaryButton>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkButton
                rkType="clear"
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <RkText rkType="header6"> Đăng nhập </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: theme.colors.screen.base
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(77),
    resizeMode: "contain"
  },
  content: {
    justifyContent: "space-between"
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: "space-around"
  },
  footer: {
    justifyContent: "flex-end"
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center"
  }
}));
