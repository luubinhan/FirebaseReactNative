import { createStackNavigator } from 'react-navigation';
import {WalkthroughScreen} from './screens/walkthroughs';
import {LoginV2} from './screens/login/login2';
import SignUp from './screens/login/SignUp';
import PasswordRecovery from './screens/login/passwordRecovery';

const RouteStack = createStackNavigator(
  {
    Walkthrough: {
      screen: WalkthroughScreen
    },
    Login: {
      screen: LoginV2
    },
    SignUp: {
      screen: SignUp
    },
    PasswordRecovery: {
      screen: PasswordRecovery
    }
  },
  {
    initialRouteName: 'Walkthrough'
  }
);

export default RouteStack;
