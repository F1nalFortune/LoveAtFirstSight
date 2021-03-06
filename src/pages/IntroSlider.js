import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Swiper from "react-native-web-swiper";
import GeneralStatusBarColor from '../components/GeneralStatusBarColor';
// import firebase from '@react-native-firebase/app';


export default class IntroSlider extends Component {
  render() {
    // firebase.analytics().setCurrentScreen('welcome');
    console.disableYellowBox = true;
      return (
        <View style={styles.container}>
          <GeneralStatusBarColor backgroundColor="#345f3f"
                barStyle="light-content"/>
          <View style={{ flex: 1 }}>
            <Swiper
              index={1}
              controlsProps={{
                dotActiveStyle: {backgroundColor: 'green'},
                prevTitle: 'Previous',
                nextTitle: 'Next',
                firstPrevElement: (
                  <TouchableOpacity>
                    <Text style={{color: '#0000EE'}}>Skip</Text>
                  </TouchableOpacity>
                ),
                lastNextElement: (
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{color: '#345f3f', fontWeight: 'bold'}}>Got it</Text>
                  </TouchableOpacity>
                ),
                cellsStyle: {
                  'bottom': {
                    padding: 25,
                    paddingBottom:50,
                    backgroundColor: 'white',
                    width: Dimensions.get('window').width,
                    borderTopColor: 'black', borderTopWidth: 2
                  },
                  'bottom-left':{
                    padding:25,
                    paddingBottom:50,
                    zIndex: 3
                  },
                  'bottom-right':{
                    padding:25,
                    paddingBottom:50
                  }
                }
              }}
            >
              <View style={[styles.slideContainer]}>
                <View style={{ flex: 1, alignItems: "center",
                justifyContent: 'flex-end',
                marginBottom: 50}}>
                  <Text style={styles.header}>Welcome to Love at First Sight!</Text>
                  <Text style={styles.subHeader}>Let us get right to it.</Text>
                  <Image
                  style={{
                    maxWidth: Dimensions.get('window').width*.75 ,
                    maxHeight:Dimensions.get('window').height*.5,
                    paddingTop: 250
                  }}                    source={require('../../assets/images/upcoming_shows.png')}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={[styles.slideContainer]}>
                <View style={{ flex: 1, alignItems: "center",
                justifyContent: 'flex-end',
                marginBottom: 50}}>
                  <Text style={styles.header}>Stay informed on the go.</Text>
                  <Text style={styles.subHeader}>Subscribe to
                  announcements & receive realtime alerts</Text>
                  <Image
                    style={{
                      maxWidth: Dimensions.get('window').width*.75 ,
                      maxHeight:Dimensions.get('window').height*.5,
                      paddingTop: 250
                    }}
                    source={require('../../assets/images/upcoming_shows.png')}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={[styles.slideContainer]}>
                <View style={{ flex: 1, alignItems: "center",
                justifyContent: 'flex-end',
                marginBottom: 50}}>
                  <Text style={styles.header}>Dont ever miss a show</Text>
                  <Text style={styles.subHeader}>Save events in your calenedar
                  with the press of a button</Text>
                  <Image
                  style={{
                    maxWidth: Dimensions.get('window').width*.75 ,
                    maxHeight:Dimensions.get('window').height*.5,
                    paddingTop: 250
                  }}
                    source={require('../../assets/images/upcoming_shows.png')}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </Swiper>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    fontSize: 28,
    textAlign: 'center'
  },
  subHeader:{
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
    padding: 25,
    paddingBottom: 50
  },
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  }

});
