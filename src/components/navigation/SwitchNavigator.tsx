import { createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation';
import RootNavigator from './RootStackNavigator';

export default createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
    headerMode: 'none',
  },
);
