import {View, useWindowDimensions} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import CustomMarker from '../../components/CustomMarker';
import CrimeCarousellItem from '../../components/CrimeCarouselItem';
import {FlatList} from 'react-native-gesture-handler';

const CrimesMap = ({crimes, longitude, latitude}) => {
  const delta = 0.1;

  const [selectedCrimeId, setSelectedCrimeId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 250,
  });

  const onViewChange = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedCrime = viewableItems[0].item;
      setSelectedCrimeId(selectedCrime.id);
    }
  }, []);

  useEffect(() => {
    if (!selectedCrimeId || !flatlist.current) {
      return;
    }
    const index = crimes.findIndex(crime => crime.id === selectedCrimeId);
    flatlist.current.scrollToIndex({index});
    const selectedCrime = crimes[index];
    const region = {
      latitude: parseFloat(selectedCrime.location.latitude),
      longitude: parseFloat(selectedCrime.location.longitude),
    };
    map.current.animateToRegion(region);
  }, [selectedCrimeId]);

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
        {crimes.map(({id, location, category}) => (
          // <CustomMarker
          //   coordinate={location}
          //   category={category}
          //   selected={id === selectedCrimeId}
          //   onPress={() => setSelectedCrimeId(id)}
          // />
          <Marker
            key={id}
            tracksViewChanges={false}
            selected={id === selectedCrimeId}
            onPress={() => setSelectedCrimeId(id)}
            coordinate={{
              latitude: parseFloat(location.latitude),
              longitude: parseFloat(location.longitude),
            }}
            title={category}
            description={location.street.name}
            pinColor={'navy'}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={crimes}
          renderItem={({item}) => <CrimeCarousellItem crime={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width - 50}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChange.current}
          initialScrollIndex={0}
          // onScrollToIndexFailed={info => {
          //   const wait = new Promise(resolve => setTimeout(resolve, 500));
          //   wait.then(() => {
          //     flatlist.current.scrollToIndex({
          //       index: info.index,
          //       animated: true,
          //     });
          //   });
          // }}
        />
      </View>
    </View>
  );
};

export default CrimesMap;
