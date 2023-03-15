import { View, Text } from 'react-native'
import React from 'react'
import styles from './style';

const Crime = (props) => {
    const crime = props.crime;
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{crime.category}</Text>
      <Text style={styles.location}>{crime.location.street.name}</Text>
    </View>
  )
}

export default Crime