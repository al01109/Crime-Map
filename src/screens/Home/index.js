import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {height} = Dimensions.get('window');
  const isLargeScreen = height >= 800; // Breakpoint for large screens

  const success = useCallback(
    position => {
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
    },
    [navigation],
  );

  const error = useCallback(err => {
    setLoading(false);
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }, []);

  const loadUserLocation = useCallback(() => {
    setLoading(true);
    Geolocation.getCurrentPosition(success, error, options);
  }, [success, error]);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    return () => Geolocation.stopObserving();
  }, []);

  return (
    <View style={isLargeScreen && styles.largeScreen}>
      <Pressable
        style={
          isLargeScreen
            ? styles.largeScreenSearchButton
            : styles.smallScreenSearchButton
        }
        onPress={() => navigation.navigate('Location Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>
          {'  '}
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
        <Pressable style={styles.button} onPress={loadUserLocation}>
          <Text style={styles.buttonText}>Explore Nearby Crimes</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
