import React from 'react'
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CrimesScreen from '../screens/Crimes';
import CrimesMap from '../screens/CrimesMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Map"} component={CrimesMap}></Tab.Screen>
      <Tab.Screen name={"List"} component={CrimesScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator