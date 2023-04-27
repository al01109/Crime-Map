import {View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Crime from '../../components/Crime';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CrimesScreen = ({crimes}) => {
  const key = 'saved-crimes';
  const [savedCrimes, setSavedCrimes] = useState([]);

  useEffect(() => {
    fetchCrimes();
  }, [savedCrimes]);

  async function fetchCrimes() {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        setSavedCrimes(JSON.parse(data));
      } else {
        console.log('No data found for the given key');
      }
    } catch (error) {
      console.log('Error while retrieving data: ', error);
    }
  }

  function toggleSaved(crime) {
    savedCrimes.some(c => c.id === crime.id)
      ? handleDeleteObject(crime)
      : handleAddNewObject(crime);
  }

  const handleAddNewObject = async crime => {
    const updatedArray = [...savedCrimes, crime];
    await saveFavoriteObjectsToAsyncStorage(updatedArray);
  };

  const handleDeleteObject = async crime => {
    const updatedArray = savedCrimes.filter(obj => obj.id !== crime.id);
    await saveFavoriteObjectsToAsyncStorage(updatedArray);
  };

  const saveFavoriteObjectsToAsyncStorage = async updatedArray => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(updatedArray));
      setSavedCrimes(updatedArray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <FlatList
        data={crimes}
        renderItem={({item}) => (
          <Crime
            crime={item}
            savedCrimes={savedCrimes.map(crime => crime.id)}
            onPress={toggleSaved}
          />
        )}
      />
    </View>
  );
};

export default CrimesScreen;
