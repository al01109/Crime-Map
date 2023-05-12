import {View, FlatList, useWindowDimensions} from 'react-native';
import React, {useEffect, useRef, useState, useCallback, useMemo} from 'react';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import CrimeCarousellItem from '../../components/CrimeCarouselItem';
import {formatName} from '../../utils/stringFormatter';
import styles from './styles';

const delta = 0.1;
const viewConfig = {
  itemVisiblePercentThreshold: 70,
  minimumViewTime: 250,
};

const CrimesMap = ({crimes, longitude, latitude}) => {
  const [selectedCrimeId, setSelectedCrimeId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlistRef = useRef();
  const mapRef = useRef();
  const viewConfigRef = useRef(viewConfig);

  const handlePressMarker = useCallback(id => setSelectedCrimeId(id), []);

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

  const initialRegion = useMemo(
    () => ({
      latitude,
      longitude,
      latitudeDelta: delta,
      longitudeDelta: delta,
    }),
    [latitude, longitude],
  );

  useEffect(() => {
    if (selectedCrimeIndex !== null) {
      flatlistRef.current?.scrollToIndex({index: selectedCrimeIndex});
    }
  }, [selectedCrimeIndex]);

  useEffect(() => {
    if (selectedCrimeIndex !== null) {
      const selectedCrime = crimes[selectedCrimeIndex];
      const region = {
        latitude: parseFloat(selectedCrime.location.latitude),
        longitude: parseFloat(selectedCrime.location.longitude),
      };
      mapRef.current?.animateToRegion(region);
    }
  }, [selectedCrimeIndex, crimes]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        clusterColor={'navy'}
        radius={width * 0.06}
        maxZoom={20}
        minZoom={1}
        minPoints={2}
        extent={512}
        nodeSize={16}
        initialRegion={initialRegion}>
        {crimes.map(({id, location, category}) => (
          <Marker
            key={id}
            tracksViewChanges={false}
            selected={id === selectedCrimeId}
            onPress={() => handlePressMarker(id)}
            coordinate={{
              latitude: parseFloat(location.latitude),
              longitude: parseFloat(location.longitude),
            }}
            title={formatName(category)}
            description={location.street.name}
            pinColor={'navy'}
          />
        ))}
      </MapView>
      <View style={styles.flatList}>
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
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              if (flatlistRef.current !== null) {
                flatlistRef.current.scrollToIndex({
                  index: info.index,
                  animated: true,
                });
              }
            });
          }}
        />
      </View>
    </View>
  );
};

export default CrimesMap;
