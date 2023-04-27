import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {formatName, formatDate} from '../../utils/stringFormatter';
import Share from 'react-native-share';

const Crime = ({crime, savedCrimes, onPress}) => {
  const navigation = useNavigation();

  const shareContent = async () => {
    try {
      const result = await Share.open({
        message: `Crime Details: ${formatName(crime.category)} ${
          crime.location.street.name
        } in ${formatDate(
          crime.month,
        )}.\n If you have any information related to this crime, please contact the authorities.\n Download the CrimeMap Application at`,
        url: 'https://example.com',
        title: 'Crime Map',
        subject: 'Share Link', // Android only
      });
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };

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
      <Text style={styles.location}>{formatDate(crime.month)}</Text>
      <Pressable onPress={shareContent} style={styles.share}>
        <Feather name={'share'} size={20} />
      </Pressable>
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
