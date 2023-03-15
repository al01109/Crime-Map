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
import QuickLink from './src/components/QuickLink';
import quickLinksFeed from './assets/data/quickLinksFeed';


function App(): JSX.Element {
  const link1 = quickLinksFeed[0];
  const link2 = quickLinksFeed[1];
  const link3 = quickLinksFeed[2];
  return (
    <SafeAreaView>
       <StatusBar barStyle="dark-content" />
      {/* <HomeScreen></HomeScreen> */}
      <View>
        <SafeAreaView>
          <ScrollView>
          {/* <HomeScreen /> */}
          <QuickLink link={link1}/>
          <QuickLink link={link2}/>
          <QuickLink link={link3}/>
          </ScrollView>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}

export default App;
