import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const RouteStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default RouteStack;
