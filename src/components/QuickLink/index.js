import {View, Text, Image, Linking, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const QuickLink = props => {
  const link = props.link;
  return (
    <Pressable
      style={styles.container}
      onPress={() => Linking.openURL(link.url)}>
      <Image style={styles.image} source={{uri: link.image}}></Image>
      <Text style={styles.name}>{link.name}</Text>
      <Text style={styles.description} numberOfLines={4}>
        {link.description}
      </Text>
    </Pressable>
  );
};

export default QuickLink;
