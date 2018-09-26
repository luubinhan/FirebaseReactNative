import { createStackNavigator } from 'react-navigation';
import {WalkthroughScreen} from './screens/walkthroughs';
import {LoginV2} from './screens/login/login2';

const RouteStack = createStackNavigator(
  {
    Walkthrough: {
      screen: WalkthroughScreen
    },
    Login: {
      screen: LoginV2
    }
  },
  {
    initialRouteName: 'Walkthrough'
  }
);

export default RouteStack;
