import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  AsyncStorage,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import DzikrPagi from './DzikrPagi';
import DzikrPetang from './DzikrPetang';

import { ratio, colors } from '../../../utils/Styles';

// الذكر  الهجرة
const Page = (tabLabel, {label}) => (
  <View style={styles.container}>
    <Text style={styles.styleS2}>
      Developed by mattalhijra@2018
    </Text>
    <Text style={styles.styleS2}>
      Email : mattalhijra@gmail.com
    </Text>
    <Text style={styles.styleS2}>
      Love you, Atiqa Fairuz Khalisa
    </Text>
  </View>
);

class Index extends Component<any, any> {

  constructor(props) {
    super(props);
  }

  public render() {
      return (
        <ScrollableTabView
            tabBarActiveTextColor='#53ac49'
            renderTabBar={() => <TabBar underlineColor='#53ac49' />}>
          <DzikrPagi tabLabel={{label: 'Dzikr Pagi'}} />
          <DzikrPetang tabLabel={{label: 'Dzikr Petang'}} />
          <Page tabLabel={{label: 'Developr'}} />
          {/* <Page tabLabel={{label: 'Page Demo'}} />
          <Page tabLabel={{label: 'Page Demo'}} /> */}
        </ScrollableTabView>
      );
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
  styleS2: {
    fontSize: 20,
    margin: 15,
    textAlign: 'center',
  },
});
