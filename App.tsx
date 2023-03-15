import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeScreen from './src/screens/Home';



function App(): JSX.Element {
  
  return (
    <SafeAreaView>
      <StatusBar/>
      <HomeScreen></HomeScreen>
    </SafeAreaView>
  );
}

export default App;
