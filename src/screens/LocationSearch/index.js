import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import Entype from 'react-native-vector-icons/Entypo'

const LocationSearchScreen = () => {

    const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Search for crimes at a specific location...'}
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList 
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Entype name={'location-pin'} size={35} color={'black'}/>
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View> 
  )
}

export default LocationSearchScreen