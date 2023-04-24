import {View, Text, FlatList} from 'react-native';
import React from 'react';
import quickLinksFeed from '../../../assets/data/quickLinksFeed';
import QuickLink from '../../components/QuickLink';

const QuickLinksScreen = () => {
  return (
    <View>
      <FlatList
        data={quickLinksFeed}
        renderItem={({item}) => <QuickLink link={item} />}
      />
    </View>
  );
};

export default QuickLinksScreen;
