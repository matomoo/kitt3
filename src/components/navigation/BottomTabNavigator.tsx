import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { observer } from 'mobx-react/native';

import { colors } from '../../utils/Styles';
import IntroScreen from '../screen/Intro';
import NotFoundScreen from '../screen/NotFound';
import Home from '../screen/Home';

const routeConfig = {
  Home: {
    screen: Home,
    path: 'Home',
  },
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      title: 'Intro',
      tabBarVisible: false, // this setting is to hide tabBar when this tab active
    },
    path: 'intro',
  },
  // NotFound: {
  //   screen: NotFoundScreen,
  //   path: 'NotFound',
  // },
};

const navigatorConfig = {
  initialRouteName: 'Home',
  // gesturesEnabled: true,
  // statusBarStyle: 'light-content',
  // navigationOptions: {
  //   headerStyle: {
  //     headerBackTitle: null,
  //     backgroundColor: colors.dodgerBlue,
  //     borderBottomColor: 'transparent',
  //     borderBottomWidth: 0,
  //     elevation: 0,
  //   },
  //   headerTitleStyle: { color: 'white' },
  //   headerTintColor: 'white',
  // },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
};

const RootStackNavigator = createBottomTabNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

@observer
class BottomTabNavigator extends React.Component<IProps> {
  private static router = RootStackNavigator.router;

  public render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default BottomTabNavigator;
