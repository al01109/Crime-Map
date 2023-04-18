import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

const AutocompleteSuggestionRow = ({item}) => (
    <View 
      style={styles.row}>
      <View style={styles.iconContainer}>
          <Entypo name={'location-pin'} size={35} color={'black'}/>
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  )

export default AutocompleteSuggestionRow