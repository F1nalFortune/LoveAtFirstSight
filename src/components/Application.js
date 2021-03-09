import React, {Fragment, Component} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
  Alert,
  SafeAreaView,
  NativeModules
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

import Video from './Video'
import Message from './Message'
import Settings from './Settings'

import Loading from './Loading'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import IntroSlider from '../pages/IntroSlider'

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      cal_auth: ''
    }
  }
  // navigationOptions: {
  //   title: "Settings",
  //   headerStyle: {
  //     backgroundColor: "#000000cc",
  //     opacity: .8,
  //     borderBottomColor: 'green',
  //     borderBottomWidth: 1
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     color: "#fff",
  //     textShadowColor: "#66ff66",
  //     textShadowOffset: {width: -1, height: 1},
  //     textShadowRadius: 10,
  //     shadowOpacity: .58,
  //     textAlign: 'center',
  //     fontFamily: "Merriweather-Bold",
  //     textTransform: 'uppercase',
  //     fontSize: 24,
  //     padding: 10
  //   }
  // }
  render() {
    const SettingsStack = createStackNavigator({
      Settings: {
        screen: Settings
      }
    },{headerLayoutPreset: 'center'})
    SettingsStack.navigationOptions = ({ navigation }) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (route.routeName != "Settings") {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
      return {
        tabBarVisible
      };
    };
    const VideoStack = createStackNavigator({
      Video: {
        screen: Video
      },
    },{headerLayoutPreset: 'center'});
    const MessageStack = createStackNavigator({
      Message: {
        screen: Message
      },
    },{headerLayoutPreset: 'center'});
    const MainTabs = createBottomTabNavigator({
      Video: { screen: VideoStack },
      Settings: { screen: SettingsStack }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Video') {
            iconName = 'camera';
          } else if (routeName === 'Message'){
            iconName = 'comments';
          } else if (routeName === 'Settings'){
            iconName = 'user';
          }
          return <Icon name={iconName} size={25} style={styles.glow}/>;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        inactiveBackgroundColor: 'black',
        activeBackgroundColor: '#272727',
        style:{
          height: 65,
          zIndex: 1000
        }
      }
    });

    const Application = createAppContainer(createSwitchNavigator({
      Loading: {
        screen: Loading
      },
      Welcome: {
        screen: IntroSlider
      },
      SignUp: {
        screen: SignUp
      },
      Login: {
        screen: Login
      },
      Forgot: {
        screen: ForgotPassword
      },
      App: {
        screen: MainTabs
      }
    },
    {
      initialRouteName: 'Loading'
    }
  ));
    return <Application />;
  }
}



const styles = StyleSheet.create ({
  act:{
    width: '50%'
  },
  bold:{
    fontWeight: 'bold'
  },
  button:{
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    textTransform: 'uppercase',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  center:{
    textAlign: 'center'
  },
  date:{
    fontSize: 24,
    textTransform: 'uppercase'
  },
  dateWrapper:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  glow:{
    color: "#fff",
    textShadowColor: "#66ff66",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    padding: 10
  },
  infoLink:{
    textAlign: 'center',
    paddingTop: 10
  },
  info:{
    width: '50%'
  },
  icon:{

  },
  imgWrapper:{
    width: '100%'
  },
  image: {
      flex: 1,
      alignSelf: 'stretch'
  },
  link:{
    color: 'blue',
    zIndex: 100
  },
  starDetail:{
    textAlign: 'center',
    paddingTop: 10,
    position: 'relative'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    color: "#fff",
    textShadowColor: "#66ff66",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
    fontFamily: "Merriweather-Bold",
    textTransform: 'uppercase',
    padding:10
  },
  titleWrapper:{
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    // width: 100,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})
