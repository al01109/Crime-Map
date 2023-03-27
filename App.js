import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Router from './src/navigation/Router';
import { Amplify } from 'aws-amplify'
import { Auth } from 'aws-amplify';
import config from './src/aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react-native'

Amplify.configure(config)

function App()  {
  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
  return (
    <>
       <StatusBar barStyle="dark-content" />
       <Router />
       <Button onPress={signOut} title={'Sign Out'} />
    </>
  );
}

export default withAuthenticator(App)
