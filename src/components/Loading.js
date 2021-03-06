import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class Loading extends Component {
  componentDidMount() {
    auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Video' : 'Welcome')
    })
  }
  render() {
    // firebase.analytics().setCurrentScreen('loading-one');
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
