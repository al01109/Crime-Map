import React, {useState, useEffect} from 'react'
import { HeaderBackButton } from '@react-navigation/elements';
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute, useNavigation } from "@react-navigation/native";
import CrimesScreen from '../screens/Crimes';
import CrimesMap from '../screens/CrimesMap';
import CrimeStatistics from '../screens/CrimeStats';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { longitude, latitude, date, name }  = route.params;
  const [crimes, setCrimes] = useState([]);
  useEffect(() => {
    const fetchCrimes = async () => {
      try {
        fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`)
        .then(res => res.json())
        .then((result) => {
          setCrimes(result)
        })
      } catch (e) {
        console.log(e);
      }
    }
    fetchCrimes();
    navigation.setOptions({
      title: (name + ' ' + date),
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'Welcome'
            }
          })}
        />
      ),
    });
  }, [])

  return (
    <Tab.Navigator>
      <Tab.Screen name={"Map"}>
        {() => (
          <CrimesMap crimes={crimes} longitude={longitude} latitude={latitude}></CrimesMap>
        )}
      </Tab.Screen>
      <Tab.Screen name={"Comments"}>
        {() => (
          <CrimesScreen crimes={crimes}></CrimesScreen>
        )}
      </Tab.Screen>
      <Tab.Screen name={"Statistics"}>
        {() => (
          <CrimeStatistics crimes={crimes}></CrimeStatistics>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator