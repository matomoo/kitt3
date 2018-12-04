import React from 'react';
import { createStackNavigator, createBottomTabNavigator, getActiveChildNavigationOptions } from 'react-navigation';
import { observer } from 'mobx-react/native';
import { colors } from '../../utils/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import IntroScreen from '../screen/Intro';
import NotFoundScreen from '../screen/NotFound';
import Home from '../screen/Home';

// Set here for tabNavigator content
const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: (() => (<Icon name='home' size={30}/>) ),
        tabBarVisible: false,
        // title: 'Dzikr App', // setting header title on its screen
      },
    },
    Intro: { screen: IntroScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Setting',
        tabBarIcon: (() => (<Icon name='cogs' size={30}/>) ),
        tabBarVisible: false,
        // title: 'Intro',
        // headerBackTitle: null,
      }),
    },
},
  );

const routeConfig = {
  BottomTabNavigator: {
    screen: BottomTabNavigator,
    navigationOptions: ({ navigation, screenProps }) => {
      const childOptions = getActiveChildNavigationOptions(navigation, screenProps);
      return {
        title: childOptions.title,
      };
    },
  },
  NotFound: {
    screen: NotFoundScreen,
    path: 'NotFound',
    navigationOptions: () => ({
      title: 'Not Found',
      // headerBackTitle: null,
    }),
  },
};

const navigatorConfig = {
  initialRouteName: 'BottomTabNavigator',
  // header: null,
  // gesturesEnabled: true,
  // statusBarStyle: 'light-content',
  navigationOptions: {
    headerStyle: {
      // headerBackTitle: null,
      backgroundColor: colors.dodgerBlue,
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
    // title: 'Dzikr App',
    headerMode: 'screen',
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
  },
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

@observer
class RootNavigator extends React.Component<IProps> {
  private static router = RootStackNavigator.router;

  public render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default RootNavigator;
