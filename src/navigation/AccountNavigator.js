import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import ProfileScreen from '../screens/Profile';
import ResetPasswordScreen from '../screens/ResetPassword';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
      <Stack.Screen name={'Reset Password'} component={ResetPasswordScreen} />
      <Stack.Screen name={'Privacy Policy'} component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

export default Router;
