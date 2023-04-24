import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Entype from 'react-native-vector-icons/Entypo'

const AutocompleteSuggestionRow = ({item}) => (
    <View 
      style={styles.row}>
      <View style={styles.iconContainer}>
          <Entype name={'location-pin'} size={35} color={'black'}/>
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  )

export default AutocompleteSuggestionRow;