import React from 'react';
import {Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Share from 'react-native-share';
import styles from './style';
import {formatName, formatDate} from '../../utils/stringFormatter';

const Crime = ({crime, savedCrimes, onPress}) => {
  const navigation = useNavigation();

  const shareContent = async () => {
    try {
      const result = await Share.open({
        message: `Crime Details: ${formatName(crime.category)} ${
          crime.location.street.name
        } in ${formatDate(
          crime.month,
        )}.\nIf you have any information related to this crime, please contact the authorities.\nDownload the CrimeMap Application at`,
        url: 'https://play.google.com/store/apps',
        title: 'Crime Map',
        subject: 'Share Link', // Android only
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
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
          <FontAwesome
            name="save"
            color={'#2196f3'}
            size={20}
            style={styles.save}
          />
        </Pressable>
      ) : (
        <Pressable onPress={() => onPress(crime)}>
          <FontAwesome
            name="save"
            color={'#808080'}
            size={20}
            style={styles.save}
          />
        </Pressable>
      )}
    </Pressable>
  );
};

export default Crime;
