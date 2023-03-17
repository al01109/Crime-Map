import { View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import crimes from '../../../assets/data/crimes';
import CrimeCarousellItem from '../../components/CrimeCarouselItem';
import { FlatList } from 'react-native-gesture-handler';

const CrimesMap = () => {
  const [selectedCrimeId, setSelectedCrimeId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChange = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedCrime = viewableItems[0].item;
      setSelectedCrimeId(selectedCrime.id);
    }
  });

  useEffect(() => {
    if (!selectedCrimeId || !flatlist) {
      return;
    }
    const index = crimes.findIndex(crime => crime.id === selectedCrimeId);
    flatlist.current.scrollToIndex({index});
    const selectedCrime = crimes[index];
    const region = {
      latitude: parseFloat(selectedCrime.location.latitude),
      longitude: parseFloat(selectedCrime.location.longitude),
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current.animateToRegion(region);
  }, [selectedCrimeId])

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
        latitude: 28.32798,
        longitude: -16.51248,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
        }}>
        {crimes.map(crime => 
          <CustomMarker
            coordinate={crime.location}
            category={crime.category}
            isSelected={crime.id === selectedCrimeId}
            onPress={() => setSelectedCrimeId(crime.id)}
          />
        )}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={crimes}
          renderItem={({item}) => <CrimeCarousellItem crime={item}></CrimeCarousellItem>}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width - 50}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChange.current}
         />
      </View>
    </View>
  )
}

export default CrimesMap