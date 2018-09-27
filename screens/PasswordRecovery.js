import React from "react";
import { View, Image, Keyboard, Text, StyleSheet } from "react-native";
import {
  RkTextInput,
  RkTheme,
  RkAvoidKeyboard
} from "react-native-ui-kitten";
import { GradientButton } from "../components";
import PrimaryButton from '../components/PrimaryButton';
import { scale, scaleModerate, scaleVertical } from "../utils/scale";

export default class PasswordRecoveryScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <RkAvoidKeyboard
        behavior="position"
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={styles.content}>
          <RkTextInput placeholder="Email" />
          <Text>
            Chúng tôi sẽ gởi hướng dẫn đặt lại mật khẩu vào email
          </Text>
        </View>
        <PrimaryButton
          style={styles.save}
          onPress={() => this.props.navigation.goBack()}
        >
          Gởi
        </PrimaryButton>
      </RkAvoidKeyboard>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: scaleVertical(24),
    justifyContent: "space-between"
  },
  header: {
    alignItems: "center"
  },
  image: {
    marginVertical: scaleVertical(27),
    height: scaleVertical(77),
    resizeMode: "contain"
  },
  content: {
    alignItems: "center"
  }
});
