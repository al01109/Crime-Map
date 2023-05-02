import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import ProfileScreen from '../screens/Profile';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Profile'} component={ProfileScreen} options={{}} />
      <Stack.Screen name={'Privacy Policy'} component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

export default Router;
