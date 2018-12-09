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
import { APP_MASK } from '../../../utils/Icons';

import { ratio, colors } from '../../../utils/Styles';

// الذكر  الهجرة
const Page = (tabLabel, {label}) => (
  <View style={styles.container}>
    <View style={styles.header} />
    <Image style={styles.avatar} source={APP_MASK}/>
    <View style={styles.body}>
      <View style={styles.bodyContent}>
        {/* <Text style={styles.name2}>متى الهجرة</Text> */}
        <Text style={styles.description}>Mattalhijra developer</Text>
        <Text style={styles.info}>mattalhijra@gmail.com</Text>
      </View>
  </View>
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
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name2: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
