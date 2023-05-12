import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CrimesScreen from '../Crimes';

const SavedCrimesScreen = () => {
  const key = 'saved-crimes';
  const [savedCrimes, setSavedCrimes] = useState([]);

  useEffect(() => {
    fetchCrimes();
  });

  async function fetchCrimes() {
    try {
      const stringifiedData = await AsyncStorage.getItem(key);
      if (stringifiedData !== null) {
        const data = JSON.parse(stringifiedData);
        setSavedCrimes(data);
      } else {
        console.log('No data found for the given key');
      }
    } catch (error) {
      console.log('Error while retrieving data: ', error);
    }
  }

  return <CrimesScreen crimes={savedCrimes}></CrimesScreen>;
};

export default SavedCrimesScreen;
