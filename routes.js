import { createStackNavigator } from 'react-navigation';
import {WalkthroughScreen} from './screens/walkthroughs';

const RouteStack = createStackNavigator(
  {
    Walkthrough: {
      screen: WalkthroughScreen
    }
  },
  {
    initialRouteName: 'Walkthrough'
  }
);

export default RouteStack;
