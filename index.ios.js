import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import * as firebase from 'firebase';
import Splash from './Splash.js';
import Login from './src/components/Login/Login.js';



export default class ReadIt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('ReadIt', () => ReadIt);
