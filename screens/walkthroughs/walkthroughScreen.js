import React from "react";
import { View, StyleSheet } from "react-native";
import { RkButton } from "react-native-ui-kitten";
import {
  GradientButton,
  PaginationIndicator,
  Walkthrough
} from "../../components";
import PrimaryButton from '../../components/PrimaryButton';

import { Walkthrough1 } from "./walkthrough1";
import { Walkthrough2 } from "./walkthrough2";

export class WalkthroughScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  changeIndex(index) {
    this.setState({ index });
  }

  render() {
    return (
      <View style={styles.screen}>
        <Walkthrough onChanged={index => this.changeIndex(index)}>
          <Walkthrough1 />
          <Walkthrough2 />
        </Walkthrough>
        <PaginationIndicator length={2} current={this.state.index} />
        <View style={styles.buttonWrap}>
          <PrimaryButton
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}
          >
            Đăng Nhập
          </PrimaryButton>
          <RkButton
            rkType='outline stretch'
            style={styles.dangKyButton}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            Đăng ký
          </RkButton>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f6f9fa',
    paddingVertical: 28,
    alignItems: "center",
    flex: 1
  },
  buttonWrap: {
    paddingTop: 10,
    paddingHorizontal: 28,
    alignSelf: 'stretch'
  },
  dangKyButton: {
    marginTop: 25
  }
});
