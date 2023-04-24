import {View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CrimesScreen from '../Crimes';
import {useFocusEffect} from '@react-navigation/native';

const SavedCrimesScreen = () => {
  const key = 'crimes';
  const [savedCrimes, setSavedCrimes] = useState([]);

  const refetchCrimes = useCallback(() => {
    fetchCrimes();
  }, []);

  useFocusEffect(refetchCrimes);

  useEffect(() => {
    fetchCrimes();
  }, []);

  async function fetchCrimes() {
    try {
      AsyncStorage.getItem(key)
        .then(stringifiedData => {
          if (stringifiedData !== null) {
            const data = JSON.parse(stringifiedData);
            setSavedCrimes(data);
          } else {
            console.log('No data found for the given key');
          }
        })
        .catch(error => console.log('Error while retrieving data: ', error));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      <CrimesScreen crimes={savedCrimes}></CrimesScreen>
    </View>
  );
};

export default SavedCrimesScreen;
