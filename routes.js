import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import {WalkthroughScreen} from './screens/walkthroughs';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import PasswordRecoveryScreen from './screens/PasswordRecovery';

const AuthStack = createStackNavigator(
  {
    Walkthrough: WalkthroughScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    PasswordRecovery: PasswordRecoveryScreen
  },
);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
);
