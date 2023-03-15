import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import Entype from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

const LocationSearchScreen = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Fontisto name='search' size={20} color={'#f15454'} />
        <TextInput
          style={styles.textInput}
          placeholder={' Search for crimes at a specific location...'}
          value={inputText}
          onChangeText={setInputText}
        />
      </View>
      <FlatList 
        data={searchResults}
        renderItem={({item}) => (
          <Pressable 
            onPress={() =>
              navigation.navigate('Home', {
                screen: 'Explore',
                params: {
                  screen: 'SearchResults'
                },
              })
            }
            style={styles.row}>
            <View style={styles.iconContainer}>
                <Entype name={'location-pin'} size={35} color={'black'}/>
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View> 
  )
}
export default LocationSearchScreen