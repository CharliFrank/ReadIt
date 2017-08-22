import React, { Component } from 'react';
import { TextInput, View, Image } from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''
    };
  }

  render () {
    return (
      <View>
        <Image source={require('./logo.png')} />
      </View>
    );
  }
}