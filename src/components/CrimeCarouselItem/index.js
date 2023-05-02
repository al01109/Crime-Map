import React from 'react';
import {Text, useWindowDimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {formatName} from '../../utils/stringFormatter';
import styles from './style';

const CrimeCarousellItem = ({crime}) => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width;

  return (
    <Pressable
      key={crime.id}
      style={[styles.container, {width: width - 20}]}
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
    </Pressable>
  );
};

export default CrimeCarousellItem;
