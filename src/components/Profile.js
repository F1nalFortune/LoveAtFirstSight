import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default class Profile extends Component {
  render() {
    // firebase.analytics().setCurrentScreen('video');
    return (
    <ScrollView style={{backgroundColor: '#c0dfc066'}}>
      <Text style={styles.title}>
        Teh Profile
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>
          There are several pay lots in the area, visit ParkNewHaven for
          more information.
        </Text>
        <Text style={styles.subtitle}>
          There is also metered parking throughout the city.  All meters in New
          Haven accept coins as payment, as well as the ParkMobile app.  Many
          of the meters throughout the downtown area accept Visa, Mastercard or
          Discover cards.
          {"\n"}
          The meters are in effect until 9pm Monday-Saturday
          (excluding holidays).  After 5pm, there are no time limits associated
          with any meter.  Please check each meter for time and rate.
        </Text>
      </View>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  button:{
    width: '50%', // is 50% of container width
    borderColor: '#0079c1',
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    flex: 1,
    backgroundColor: '#0079c1c4',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin:25
  },
  buttonTxt:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding:5
  },
  infoContainer:{
    padding:15
  },
  title:{
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 0
  },
  serviceInfo:{
    paddingLeft: 25,
    paddingRight: 25,
    lineHeight: 20,
    fontSize: 16
  },
  serviceTitle:{
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
  subtitle:{
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 20
  }
})
