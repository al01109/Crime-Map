import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {formatName} from '../../utils/stringFormatter';

const Crime = ({crime, savedCrimes, onPress}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Home', {
          screen: 'Explore',
          params: {
            screen: 'Comments',
            params: {
              crime: crime,
            },
          },
        })
      }>
      <Text style={styles.category}>{formatName(crime.category)}</Text>
      <Text style={styles.location}>{crime.location.street.name}</Text>
      <Text style={styles.location}>{crime.month}</Text>
      {savedCrimes.some(c => c === crime.id) ? (
        <Pressable onPress={() => onPress(crime)}>
          <AntDesign
            style={styles.like}
            name="heart"
            size={18}
            color={'red'}></AntDesign>
        </Pressable>
      ) : (
        <Pressable onPress={() => onPress(crime)}>
          <AntDesign
            style={styles.like}
            name="hearto"
            size={18}
            color={'red'}></AntDesign>
        </Pressable>
      )}
    </Pressable>
  );
};

export default Crime;
