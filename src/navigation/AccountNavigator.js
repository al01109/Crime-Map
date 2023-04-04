import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile';
import PrivacyPolicy from '../screens/PrivacyPolicy';


const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          //headerShown: false,
        }}
      />

      <Stack.Screen
        name={'Privacy Policy'}
        component={PrivacyPolicy}
        options={{
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
