import { Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style';
import { useNavigation } from '@react-navigation/native'

const Crime = (props) => {
    const crime = props.crime;
    const navigation = useNavigation();
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
    </Pressable>
  )
}

export default Crime