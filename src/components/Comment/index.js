import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const CrimeComment = ({comment}) => {
  return (
    <View key={comment.id} style={styles.commentContainer}>
      <Text style={styles.description}>{comment.description}</Text>
    </View>
  );
};

export default CrimeComment;
