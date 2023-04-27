import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const CrimeComment = ({comment}) => {
  return (
    <View key={comment.id} style={styles.commentContainer}>
      <Text>{comment.description}</Text>
    </View>
  );
};

export default CrimeComment;
