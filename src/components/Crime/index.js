import { Text, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './style';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Crime = (props) => {
  const { crime } = props;
  const navigation = useNavigation();
  
  const [isSaved, setIsSaved] = useState(false);
  const [favoriteObjects, setFavoriteObjects] = useState([]);

  useEffect(() => {
    const getFavoriteObjectsFromAsyncStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('crimes');
        if (jsonValue != null) {
          const parsedArray = JSON.parse(jsonValue);
          setFavoriteObjects(parsedArray);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFavoriteObjectsFromAsyncStorage();
  }, []);

  useEffect(() => {
    checkFavourites();
  }, [favoriteObjects])

  function checkFavourites() {
    const isCrimePresent = favoriteObjects.some(item => item.id === crime.id);
    setIsSaved(isCrimePresent);
  }

  function toggleLike() {
    if (isSaved){
      handleDeleteObject();
      console.log('Removed From Saved');
    } else {
      handleAddNewObject();
      console.log('Saved');
    }
  }

  const handleAddNewObject = async () => {
      const updatedArray = [...favoriteObjects, crime];
      await saveFavoriteObjectsToAsyncStorage(updatedArray);
      setIsSaved(true);
    };

  const handleDeleteObject = async () => {
    const updatedArray = favoriteObjects.filter(obj => obj.id !== crime.id);
    await saveFavoriteObjectsToAsyncStorage(updatedArray);
    setIsSaved(false);
  };

  const saveFavoriteObjectsToAsyncStorage = async (updatedArray) => {
    try {
      const jsonValue = JSON.stringify(updatedArray);
      await AsyncStorage.setItem('crimes', jsonValue);
      setFavoriteObjects(updatedArray);
    } catch (error) {
      console.log(error);
    }
  };
    
  return (
    <Pressable style={styles.container} onPress={
      () => navigation.navigate('Home', {
        screen: 'Explore',
        params: {
          screen: 'Comments',
          params: {
          crime: crime
          }
        },
      })}>
      <Text style={styles.category}>{crime.category}</Text>
      <Text style={styles.location}>{crime.location.street.name}</Text>
      <Text style={styles.location}>{crime.month}</Text>
      {!isSaved &&
        <Pressable 
        onPress={() => toggleLike()}
        >
          <AntDesign style={styles.like} name='hearto' size={18} color={'red'}></AntDesign>
        </Pressable>
      }{isSaved &&
        <Pressable 
        onPress={() => toggleLike()}
        >
          <AntDesign style={styles.like} name='heart' size={18} color={'red'}></AntDesign>
        </Pressable>
      }
    </Pressable>
  )
}

export default Crime