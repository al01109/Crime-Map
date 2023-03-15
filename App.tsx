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
import 'react-native-gesture-handler'

function App(): JSX.Element {
  return (
    <>
       <StatusBar barStyle="dark-content" />
       <Router />
    </>
  );
}

export default App;
