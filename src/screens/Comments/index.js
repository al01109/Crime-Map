import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { useRoute } from "@react-navigation/native"

const CommentsScreen = (props) => {
  const route = useRoute();
  const { crime }  = route.params;
  console.log(crime.persistent_id);
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{crime.category}</Text>
      <Text style={styles.location}>{crime.location.street.name}</Text>
    </View>
  )
}

export default CommentsScreen