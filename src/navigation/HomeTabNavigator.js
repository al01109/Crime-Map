import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/Home';
import QuickLinksScreen from '../screens/QuickLinks';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
            tabBarIcon: ({color}) => (
                <Fontisto name="search" size={25} color={color}/>
            )
        }}
      />
      <Tab.Screen
        name={"Crimes"}
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="map-marked-alt" color={color} size={size} />
              ),
        }}
      />
      <Tab.Screen
        name={"Comments"}
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Fontisto name="comments" color={color} size={size} />
            )
        }}
      />
      <Tab.Screen
        name={"Quick Links"}
        component={QuickLinksScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Entypo name="link" color={color} size={size} />
            )
        }}
      />
      <Tab.Screen
        name={"Setting"}
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Feather name="settings" color={color} size={size} />
            )
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTabNavigator