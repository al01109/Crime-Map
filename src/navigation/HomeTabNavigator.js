import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/Home';
import QuickLinksScreen from '../screens/QuickLinks'; 
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import ExploreNavigator from './ExploreNavigator';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Explore"}
        component={ExploreNavigator}
        options={{
            tabBarIcon: ({color}) => (
                <Fontisto name="search" size={25} color={color}/>
            ),
            headerShown: false,
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
        name={"Profile"}
        component={ProfileScreen}
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