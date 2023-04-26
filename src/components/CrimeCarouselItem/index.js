import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import styles from './style';

const CrimeCarousellItem = ({crime}) => {
  const width = useWindowDimensions().width;
  return (
    <View key={crime.id} style={[styles.container, {width: width - 20}]}>
      <Text style={styles.category}>{crime.category}</Text>
      <Text style={styles.location}>{crime.location.street.name}</Text>
    </View>
  );
};

export default CrimeCarousellItem;
