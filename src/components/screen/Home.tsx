import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  Text,
  View,
} from 'react-native';
import { AdMobBanner } from 'react-native-admob';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ratio, colors } from '../../utils/Styles';
import Dzikr from './Dzikr/Index';

interface IProps {
  navigation?: any;
}

interface IState {
  // isLoggingIn: boolean;
  // email;
  // password;
  msg;
}

// const BannerExample = ({ title, children, ...props }) => (
//   <View {...props} style={[styles.example]}>
//     <Text style={styles.title}>{title}</Text>
//     <View>
//       {children}
//     </View>
//   </View>
// );

class Screen extends Component<IProps, IState> {

  public static navigationOptions = ({ navigation }) => ({
    title: 'Dzikr App',
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Setting') }
        style={styles.headerR}
      >
        <Icon name='cogs' size={25} color='#aeea00'/>
        {/* // ellipsis-v */}
        {/* <Text>Settings</Text> */}
      </TouchableOpacity>
      ),
  })

  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  public render() {
    const BANNER_ID = 'ca-app-pub-8669040813100138/4302331659';
    return (
      <View style={styles.container}>
        {/* <Text onPress={() => this.props.navigation.navigate('NotFound')}>Not Found Screen</Text> */}
        <View
          style={styles.container1}
        >
          <Dzikr />
        </View>
        <View
          style={styles.container2}
          // style={styles.footer}
        >
          {/* <Text>{ this.state.msg }</Text> */}
          <AdMobBanner
                adSize='smartBanner'
                adUnitID={BANNER_ID}
                testDevices={[AdMobBanner.simulatorId]}
                didFailToReceiveAdWithError={(error) => console.log(error)}
                onAdFailedToLoad={(error) => console.log(error)}
          />
        </View>
      </View>
    );
  }

  // private bannerError( msg ) {
  //   this.setState =  ({
  //     msg,
  //   });
  // }
}

export default Screen;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 20,
  },
  container1: {
    flex: 1,
    width: '100%',
    flexGrow: 1,
  },
  container2: {
    flex: 1,
    width: '100%',
    height: 52,
    maxHeight: 52,
    backgroundColor: 'white',
  },
  headerR: {
    marginRight: 10,
  },
});
