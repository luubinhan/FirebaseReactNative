import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  StatusBar
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import ProgressBar from '../../components/progressBar';

let timeFrame = 500;

export class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true, 'none');

    this.timer = setInterval(() => {
      if (this.state.progress === 1) {
        clearInterval(this.timer);
        setTimeout(() => {
          StatusBar.setHidden(false, 'slide');
          let toHome = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Home'})]
          });
          this.props.navigation.dispatch(toHome);
        }, timeFrame);
      } else {
        let random = Math.random() * 0.5;
        let progress = this.state.progress + random;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({progress});
      }
    }, timeFrame);
  }

  render() {
    let width = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <View>
          <Image style={[styles.image, {width}]} source={require('../../assets/splash.png')} />
          <View style={styles.text}>
            <Text style={styles.hero}>MyStyle</Text>
            <Text style={styles.appName}>UI Libraries</Text>
          </View>
          <ProgressBar
            color={RkTheme.current.colors.accent}
            style={styles.progress}
            progress={this.state.progress}
            width={scale(320)}
          />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1
  },
  image: {
    resizeMode: 'cover'
  },
  text: {
    alignItems: 'center'
  },
  hero: {
    fontSize: 37
  },
  appName: {
    fontSize: 62
  },
  progress: {
    alignSelf: 'center',
    marginBottom: 35,
    backgroundColor: '#e5e5e5'
  }
});
