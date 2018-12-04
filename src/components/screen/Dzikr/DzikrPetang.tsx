import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { ratio, colors } from '../../../utils/Styles';
import dataDzikrPetang from './DataDzikrPetang';

class DzikrPetang extends Component<any, any> {
  private static navigationOptions = {
    title: 'Dzikr Petang',
  };

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <ScrollView
        // style={styles.container}
        >
        <Text style={styles.styleS2}>Bacaan Dzikr Petang</Text>
        <Text style={styles.styleS2}>أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ</Text>
        <Text style={styles.styleS2}>بِسْــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْـــــمِ</Text>
          { dataDzikrPetang.map((el, key) =>
            <View style={styles.cardS1} key={key}>
              <Text style={styles.styleS3}>{el.row5}</Text>
              <Text style={styles.styleS1}>{el.row1}</Text>
              <Text style={styles.styleS4}>{el.row2}</Text>
              <Text style={styles.styleS5}>{el.row3}</Text>
            </View>,
          )}
          <Text style={styles.styleS2}>
            Dinukil dari buku Doa Dan Wirid halaman 133- 155 yang disusun oleh Ustadz Yazid bin Abdul Qadir Jawas,
            Penerbit Pustaka Imam Asy-Syafii
          </Text>
      </ScrollView>
    );
  }

}

export default DzikrPetang;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardS1: {
    margin: 10,
  },
  styleS1: {
    fontSize: 24,
    marginBottom: 5,
  },
  styleS2: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  styleS3: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  styleS4: {
    fontSize: 12,
    marginBottom: 5,
  },
  styleS5: {
    fontSize: 14,
    marginBottom: 5,
  },
});
