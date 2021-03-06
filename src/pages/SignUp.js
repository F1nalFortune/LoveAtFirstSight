import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert
  } from 'react-native';


import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor';
import KeyboardShift from '../components/KeyboardShift';

import InputText from '../components/InputText';
import firebase from '@react-native-firebase/app';
import { database as db} from '@react-native-firebase/database';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupText:{
    color: 'rgba(0,0,0,.7)',
    fontSize:16
  },
  signupTextCont:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 15,
    flexDirection: 'row'
  },
  signupButton:{
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  button:{
    backgroundColor: "#345f3f",
    borderColor: 'green',
    borderRadius: 25,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 300
  },
  buttonText:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  error:{
    color: 'red',
    padding: 12,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10
  }
})

export default class SignUp extends Component {
    // Initialize empty state here
  state = {
    email: '',
    password: '',
    errorMsg: ''
  };

// Add this method here, type will be either email or password and the text will be whatever you type

  createNewUser = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.navigation.navigate('Video', {user})
      })
      .catch(error => {
        console.log(typeof error)
        console.log(JSON.stringify(error, null, 2))
        console.log(error)
        switch(error.code){
          case "auth/email-already-in-use":
            Alert.alert("Email already in use.", "The new user account cannot be created because the email is already in use.");
            break;

          case "auth/invalid-email":
            Alert.alert("Invalid Email", "The specified email is not a valid email.");
            break;

          case "auth/weak-password":
            Alert.alert("Weak Password", "The password must be 6 characters long or more.")
            break;

          default:
            Alert.alert("Error", "Error creating user.");
        }
      })
  }

  onSubmit = (values) => {
    // this.createNewUser(values);
  }



  render() {
    // firebase.analytics().setCurrentScreen('signup');
    const { handleSubmit } = this.props
    return (
      <KeyboardShift>
        {() => (
          <View style={{ flex: 1, backgroundColor: 'white'  }}>
          <GeneralStatusBarColor backgroundColor="#345f3f"
                barStyle="light-content"/>
          <SafeAreaView style={styles.container}>
            <Logo />
            <View style={styles.container}>
              <TextInput
                style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor="white"
                selectionColor="#345f3f"
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                blurOnSubmit={false}
                />
              <TextInput
                style={styles.inputBox}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={true}
                selectionColor="#345f3f"
                ref={(input) => this.password = input}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                />
            </View>
            <TouchableOpacity
                onPress={() => this.createNewUser()}
                style={styles.button}>
                <Text style={styles.buttonText}> Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.signupButton}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      )}
      </KeyboardShift>

    );
  }
}

const validate = (values) => {
  const errors = {};
  if(!values.name) {
    errors.name = "Name is required"
  }
  if(!values.email) {
    errors.email = "Email is required"
  }
  if(!values.password) {
    errors.password = "Password is required"
  }
  return errors
}
