import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LocationSearchScreen from '../screens/LocationSearch'
import HomeTabNavigator from './HomeTabNavigator'
import { createStackNavigator } from '@react-navigation/stack';

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