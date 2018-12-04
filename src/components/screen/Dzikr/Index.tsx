import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import DzikrPagi from './DzikrPagi';
import DzikrPetang from './DzikrPetang';

import { ratio, colors } from '../../../utils/Styles';

const Page = (tabLabel, {label}) => (
  <View style={styles.container}>
    <Text style={styles.instructions}>
      Developed by DzikrDaily
    </Text>
  </View>
);

class Index extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  public render() {
      return (
        <ScrollableTabView
            tabBarActiveTextColor='#53ac49'
            renderTabBar={() => <TabBar underlineColor='#53ac49' />}>
          <DzikrPagi tabLabel={{label: 'Dzikr Pagi'}} />
          <DzikrPetang tabLabel={{label: 'Dzikr Petang'}} />
          <Page tabLabel={{label: 'Developr'}} />
          <Page tabLabel={{label: 'Page Demo'}} />
          <Page tabLabel={{label: 'Page Demo'}} />
        </ScrollableTabView>
      );
  }

  public componentDidMount() {
    console.log('hi');
  }
}

export default Index;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // flexDirection: 'column',
    alignItems: 'center',
  },
});
