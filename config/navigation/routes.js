import _ from 'lodash';
import * as Screens from '../../screens/index';

export const MainRoutes = [
  {
    id: 'Screen1',
    title: 'Screen 1',
    screen: Screens.Screen1,
    children: []
  },
  {
    id: 'LoginMenu',
    title: 'Auth',
    screen: Screens.LoginV1,
    children: []
  }
]

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV2',
  title: 'Start',
  screen: Screens.Screen2,
  children: []
},);

export const MenuRoutes = menuRoutes;