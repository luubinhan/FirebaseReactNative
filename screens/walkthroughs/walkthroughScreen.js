import React from 'react';
import {
  View
} from 'react-native';
import {RkStyleSheet} from 'react-native-ui-kitten';
import {GradientButton, PaginationIndicator, Walkthrough} from '../../components'

import {Walkthrough1} from './walkthrough1'
import {Walkthrough2} from './walkthrough2'

export class WalkthroughScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {index: 0}
  }
  
  changeIndex(index) {
    this.setState({index})
  }

  render() {
    return (
      <View style={styles.screen}>
        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
          <Walkthrough1 />
          <Walkthrough2 />
        </Walkthrough>
        <PaginationIndicator length={2} current={this.state.index} />
        <GradientButton
          rkType='large'
          style={styles.button}
          text='GET STARTED'
          onPress={() => {
            this.props.navigate.goBack()
          }}
        />
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    paddingVertical: 28,
    alignItems: 'center',
    flex: 1
  },
  button: {
    marginBottom: 25,
    marginHorizontal: 16
  }
}));
