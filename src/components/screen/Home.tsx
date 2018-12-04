import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  Text,
  View,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';
import Dzikr from './Dzikr/Index';
interface IProps {
  navigation?: any;
}

interface IState {
  // isLoggingIn: boolean;
  email;
  password;
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
  protected static navigationOptions = ({ navigation }) => ({
    title: 'Dzikr App',
  })

  constructor(props) {
    super(props);
  }

  public render() {
    // const BANNER_ID = 'ca-app-pub-8669040813100138/9167166639';
    return (
      <View style={styles.container}>
        {/* <Text onPress={() => this.props.navigation.navigate('NotFound')}>Not Found Screen</Text> */}
        <Dzikr />
      </View>
    );
  }
}

export default Screen;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
