import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeScreen from './src/screens/Home';
import QuickLinksScreen from './src/screens/QuickLinks';
import LocationSearchScreen from './src/screens/LocationSearch';


function App(): JSX.Element {
  return (
    <SafeAreaView>
       <StatusBar barStyle="dark-content" />
      {/* <HomeScreen></HomeScreen> */}
      <LocationSearchScreen />
    </SafeAreaView>
  );
}

export default App;
