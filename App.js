import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Router from './src/navigation/Router';
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(config)

function App()  {
  return (
    <>
       <StatusBar barStyle="dark-content" />
       <Router />
    </>
  );
}

export default withAuthenticator(App)
