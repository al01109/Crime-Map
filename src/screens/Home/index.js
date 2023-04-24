import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  function loadUserLocation() {
    setLoading(true);
    Geolocation.getCurrentPosition(success, error, options);
  }

  function success(position) {
    const coordinates = position.coords;
    setLoading(false);
    navigation.navigate('Home', {
      screen: 'Explore',
      params: {
        screen: 'DateSelect',
        params: {
          longitude: coordinates?.longitude,
          latitude: coordinates?.latitude,
          name: 'Your Location',
        },
      },
    });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Location Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>
          {' '}
          Search for crimes at a specific location...
        </Text>
      </Pressable>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <ImageBackground
        source={require('../../../assets/images/police.jpg')}
        style={styles.image}>
        <Text style={styles.title}>The Crime Map</Text>
        <Pressable style={styles.button} onPress={() => loadUserLocation()}>
          <Text style={styles.buttonText}>Explore Nearby Crimes</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
