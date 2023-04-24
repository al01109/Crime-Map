import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import Router from './src/navigation/Router';
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react-native'
import { requestUserPermission, NotificationListener } from './src/utils/pushnotification_helper';

Amplify.configure(config)

function App()  {

  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, [])

  return (
    <>
       <StatusBar barStyle="dark-content" />
       <Router />
    </>
  );
}

export default withAuthenticator(App, { includeSMS: true, includeGreetings: true })
