import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Crimes from '../screens/Crimes';
//import CrimesMap from '../screens/CrimesMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Map"} component={Crimes} />
      <Tab.Screen name={"List"} component={Crimes} />
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator