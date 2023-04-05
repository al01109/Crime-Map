import { View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapView from "react-native-map-clustering";
import CustomMarker from '../../components/CustomMarker';
import CrimeCarousellItem from '../../components/CrimeCarouselItem';
import { FlatList } from 'react-native-gesture-handler';

const CrimesMap = (props) => {
  const { crimes, longitude, latitude } = props;

  const delta = 0.1;

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
      //latitudeDelta: delta,
      //longitudeDelta: delta,
    }
    map.current.animateToRegion(region);
  }, [selectedCrimeId])

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        clusterColor={'navy'}
        radius={width * 0.06}
        maxZoom={20}
        minZoom={1}
        minPoints={2}
        extent={512}
        nodeSize={16}
        initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: delta,
        longitudeDelta: delta,
        }}>
        {crimes.map(crime => 
          // <CustomMarker
          //   coordinate={crime.location}
          //   category={crime.category}
          //   isSelected={crime.id === selectedCrimeId}
          //   onPress={() => setSelectedCrimeId(crime.id)}
          // />
          <Marker
              key={crime.id}
              tracksViewChanges={false}
              isSelected={crime.id === selectedCrimeId}
              onPress={() => setSelectedCrimeId(crime.id)}
              coordinate={{
                latitude: parseFloat(crime.location.latitude),
                longitude: parseFloat(crime.location.longitude),
              }}
              title={crime.category}
              description={crime.location.street.name}
              pinColor={'navy'}
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
          initialScrollIndex={0}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              flatlist.current?.scrollToIndex({ index: info.index, animated: true });
            });
          }}
         />
      </View>
    </View>
  )
}

export default CrimesMap