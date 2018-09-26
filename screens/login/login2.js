import React from "react";
import { View, Image, Keyboard } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme
} from "react-native-ui-kitten";
import { Ionicons } from '@expo/vector-icons';
import { GradientButton } from "../../components/gradientButton";
import { scale, scaleModerate, scaleVertical } from "../../utils/scale";

export class LoginV2 extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let renderIcon = () => {
      if (RkTheme.current.name === "light") {
        return (
          <Image
            style={styles.image}
            source={require("../../assets/images/logo.png")}
          />
        );
      }
      return (
        <Image
          style={styles.image}
          source={require("../../assets/images/logoDark.png")}
        />
      );
    };

    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={styles.header}>
          {renderIcon()}
          <RkText rkType="light h1">React Native</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType="rounded" placeholder="Username" />
            <RkTextInput
              rkType="rounded"
              placeholder="Password"
              secureTextEntry={true}
            />
            <GradientButton
              style={styles.save}
              rkType="large"
              text="Login"
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
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
              <RkText rkType="primary3" onPress={() => this.props.navigation.navigate('PasswordRecovery')}>Forgot Password?</RkText>
              <RkButton
                rkType="clear"
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <RkText rkType="header6">Sign Up Now</RkText>
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
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: theme.colors.screen.base
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
  button: {
    borderColor: theme.colors.border.solid
  },
  footer: {}
}));
