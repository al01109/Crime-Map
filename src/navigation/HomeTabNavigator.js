import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QuickLinksScreen from '../screens/QuickLinks';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import ExploreNavigator from './ExploreNavigator';
import AccountNavigator from './AccountNavigator';
import SavedCrimesScreen from '../screens/SavedCrimes';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Saved Crimes'}
        component={SavedCrimesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="comments" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'Quick Links'}
        component={QuickLinksScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="link" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'Account'}
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
