import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LocationSearchScreen from '../screens/LocationSearch'
import HomeScreen from '../screens/Home'
import HomeTabNavigator from './HomeTabNavigator'

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name={"Home"}
            component={HomeTabNavigator}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name={"Location Search"}
            component={LocationSearchScreen}
            options={{
                title: "Search for Crimes", 
            }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router