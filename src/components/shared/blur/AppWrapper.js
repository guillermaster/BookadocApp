import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';

import { RkBarBg } from 'react-native-ui-kitten';

export default class AppWrapper extends Component {

  static tabProps={
    tintColor: '#fff',
    barTintColor: '#000'
  };

  render(){
    return(
    <Image
      source={require('../../../img/blurBg.png')}
      style={styles.bar}>
      {this.props.children}
      <StatusBar
        barStyle="light-content"
      />
      <RkBarBg style={styles.bar}/>
    </Image>
    )
  }

}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#ede7f6'
  },
});
