import React, {Fragment, Component} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faVideo, faUser } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();
const VideoStack = createStackNavigator();
const SettingsStack = createStackNavigator();

import Video from './Video';

function A() {
  return <View />;
}

function B() {
  return <View />;
}

function VideoStackScreen() {
  return (
    <VideoStack.Navigator>
      <VideoStack.Screen name="Video" component={Video} />
    </VideoStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="B" component={B} />
    </SettingsStack.Navigator>
  );
}

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      cal_auth: ''
    }
  }

  render() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Video') {
              iconName = faVideo;
            } else if (route.name === 'Settings') {
              iconName = faUser;
            }
            // You can return any component that you like here!
            return <FontAwesomeIcon icon={ iconName } size={25}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          inactiveBackgroundColor: 'black',
          activeBackgroundColor: '#272727',
          style:{
            height: 65,
            zIndex: 1000
          }
        }}>
        <Tab.Screen
          name="Video"
          component={VideoStackScreen}
          options={{ tabBarLabel: 'Video' }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{ tabBarLabel: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
}
