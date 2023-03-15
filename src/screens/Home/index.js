import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Location Search')}>
        <Fontisto name='search' size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>  Search for crimes at a specific location...</Text>
      </Pressable>

      <ImageBackground source={require('../../../assets/images/police.jpg')} style={styles.image}>
        <Text style={styles.title}>The Crime Map</Text>
        <Pressable style={styles.button} onPress={() => console.warn('Search Nearby Btn clicked')}><Text style={styles.buttonText}>Search Nearby Crimes</Text></Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen;