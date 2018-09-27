import React from "react";
import { Image, View, Text, StyleSheet, Dimensions } from "react-native";
import { RkText } from "react-native-ui-kitten";

export class Walkthrough1 extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Image
          source={require("../../assets/images/welcome.jpg")}
        />
        <RkText rkType="header2" style={styles.text}>
          Chào mừng đến với AquiZ
        </RkText>
        <Text>Công cụ làm tạo trắc nghiệm từ A đến Z</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 20
  },
  text: {
    marginTop: 20
  }
});
