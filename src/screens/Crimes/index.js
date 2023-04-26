import {View, FlatList} from 'react-native';
import React from 'react';
import Crime from '../../components/Crime';

const CrimesScreen = ({crimes}) => {
  return (
    <View>
      <FlatList data={crimes} renderItem={({item}) => <Crime crime={item} />} />
    </View>
  );
};

export default CrimesScreen;
