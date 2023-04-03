import React from 'react';
import { StatusBar } from 'react-native';
import Router from './src/navigation/Router';
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react-native'

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
