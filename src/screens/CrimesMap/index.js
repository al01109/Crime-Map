import {View, FlatList, useWindowDimensions, Text} from 'react-native';
import React, {useEffect, useRef, useState, useCallback, useMemo} from 'react';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import CrimeCarousellItem from '../../components/CrimeCarouselItem';

const CrimesMap = ({crimes, longitude, latitude}) => {
  const delta = 0.1;
  const [selectedCrimeId, setSelectedCrimeId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlistRef = useRef();
  const mapRef = useRef();
  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 250,
  });

  const onViewChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedCrime = viewableItems[0].item;
      setSelectedCrimeId(selectedCrime.id);
    }
  }, []);

  const selectedCrimeIndex = useMemo(() => {
    if (!selectedCrimeId) {
      return null;
    }
    return crimes.findIndex(crime => crime.id === selectedCrimeId);
  }, [selectedCrimeId, crimes]);

  useEffect(() => {
    if (!flatlistRef.current) {
      return;
    }
    if (selectedCrimeIndex !== null) {
      flatlistRef.current.scrollToIndex({index: selectedCrimeIndex});
    }
  }, [selectedCrimeIndex]);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }
    if (selectedCrimeIndex !== null) {
      const selectedCrime = crimes[selectedCrimeIndex];
      const region = {
        latitude: parseFloat(selectedCrime.location.latitude),
        longitude: parseFloat(selectedCrime.location.longitude),
      };
      mapRef.current.animateToRegion(region);
    }
  }, [selectedCrimeIndex, crimes]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={mapRef}
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
            pinColor={'navy'}></Marker>
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlistRef}
          data={crimes}
          renderItem={({item}) => <CrimeCarousellItem crime={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width - 10}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default CrimesMap;
