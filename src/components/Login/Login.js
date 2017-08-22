import React, { Component } from 'react';
import { 
  View, 
  Image,
  Text,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm.js';

export default class Login extends Component {
  render () {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../logo.png')} />
          <Text style={styles.title}>
            Keep track of the books you've read! 📚📚📚
          </Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 175,
    height: 175,
  },
  title: {
    color: '#FFF',
    marginTop: 15,
    width: 215,
    fontSize: 20,
    textAlign: 'center'
  },
  formContainer: {

  },
});
