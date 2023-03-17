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

function App(): JSX.Element {
  return (
    <>
       <StatusBar barStyle="dark-content" />
       <Router />
    </>
  );
}

export default App;
