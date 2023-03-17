import { View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import AutocompleteSuggestionRow from './AutocompleteSuggestionRow'


const LocationSearchScreen = () => {
  const navigation = useNavigation();
  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, [])

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder='Search for crimes at a specific location...'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults'
            },
          })
        }}
        styles={{
          textInput: styles.textInput
        }}
        fetchDetails
        query={{
          key: 'AIzaSyDz9fmfYk4QfwrIQDWCACVHXZxDL1EAQxM',
          language: 'en',
        }}
        suppressDefaultStyles
        renderRow={(item) => <AutocompleteSuggestionRow item={item}/>}
      />
    </View> 
  )
}

export default LocationSearchScreen;