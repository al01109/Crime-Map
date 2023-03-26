import React, {useState, useEffect} from 'react'
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from "@react-navigation/native";
import CrimesScreen from '../screens/Crimes';
import CrimesMap from '../screens/CrimesMap';
import CrimeStatistics from '../screens/CrimeStats';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  const route = useRoute();
  const { longitude, latitude }  = route.params;
  const [crimes, setCrimes] = useState([]);

  useEffect(() => {
    const fetchCrimes = async () => {
      try {
        fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}`)
        .then(res => res.json())
        .then((result) => {
          setCrimes(result)
        })
      } catch (e) {
        console.log(e);
      }
    }

    fetchCrimes();
  }, [longitude, latitude])

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