import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
  } from 'react-native';

import firebase from '@react-native-firebase/app';

import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor';
import KeyboardShift from '../components/KeyboardShift';

export default class Login extends Component {
   state = {
    email: '',
    password: '',
    errorMsg: ''
  };

  handleChangeText = (text, type) => {
    this.setState({
      [type]: text
    });
  }

  handleSignIn = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Video'))
      .catch(error => {
        console.log(error)
        console.log(JSON.stringify(error, null, 2))
        switch(error.code){
          case "auth/invalid-email":
            Alert.alert(
            "Invalid Email",
            "Email format is invalid.",
            [
              {text: 'OK', onPress: () => {
                console.log("OK pressed")
              }},
            ],
            {cancelable: false},
          );
            break;
          case "auth/wrong-password":
            Alert.alert(
            "Incorrect Password",
            "Please try another password.",
            [
              {
                text: 'Forgot Password',
                onPress: () => this.props.navigation.navigate('Forgot'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => {
                console.log("OK pressed")
              }},
            ],
            {cancelable: false},
            );
            break;

          default:
            Alert.alert(
            "Error",
            "Invalid email and password combination.",
            [
              {text: 'OK', onPress: () => {
                console.log("OK pressed")
              }},
            ],
            {cancelable: false},
            );
        }
      })
  }


  render() {
    // firebase.analytics().setCurrentScreen('login');
    return (
      <KeyboardShift>
        {() => (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
          <GeneralStatusBarColor backgroundColor="#345f3f"
                barStyle="light-content"/>
          <SafeAreaView style={styles.container}>
            <Logo />
            <LoginForm
              changeText={(text, type) => this.handleChangeText(text, type)} // Added new props here & also removed the type props
            />
            <TouchableOpacity
                onPress={() => this.handleSignIn()}
                style={styles.button}>
                <Text style={styles.buttonText}> Sign In</Text>
            </TouchableOpacity>

            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Dont have an account yet?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
              >
                <Text style={styles.signupButton}> Signup</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      )}
      </KeyboardShift>

    );
  }

}


const styles = StyleSheet.create({
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
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo:{
    width:250,
    height:250,
    resizeMode:'contain'
  },
  logoText: {
    fontSize: 18,
    marginVertical: 15
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10
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
  }
})
