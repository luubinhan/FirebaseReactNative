import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import SplashScreen from './src/screens/Splash';

const RouteStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'Splash'
  }
);

export default RouteStack;
