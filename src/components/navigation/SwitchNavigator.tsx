import { createSwitchNavigator } from 'react-navigation';
import RootStackNavigator from './RootStackNavigator';
// import BottomTabNavigator from './BottomTabNavigator';
import AuthStackNavigator from './AutheStackNavigator';
import AutheLoading from '../screen/authe/AutheLoading';

export default createSwitchNavigator(
  {
    AuthLoading: AutheLoading,
    App: RootStackNavigator,
    Auth: AuthStackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
  },
);
