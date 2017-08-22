import React, { Component } from 'react';
import { 
  TextInput, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle='light-content'
        />
        <TextInput 
          style={styles.input}
          placeholder='username or email'
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          onSubmitEditing={() => this.passWordInput.focus()}
        />
        <TextInput
          style={styles.input}
          placeholder='password'
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
          secureTextEntry
          returnKeyType='go'
          ref={(input) => this.passWordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#f39c12',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
