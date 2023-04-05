import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";
import CommentsScreen from '../screens/Comments';
import DateSelect from '../screens/DateSelect';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'DateSelect'}
        component={DateSelect}
        options={{
          title: 'Date Select',
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search location',
        }}
      />

      <Stack.Screen
        name={'Comments'}
        component={CommentsScreen}
        options={{
          title: 'Comments',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
