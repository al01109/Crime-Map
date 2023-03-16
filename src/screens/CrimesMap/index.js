import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import crimes from '../../../assets/data/crimes';
import CrimeCarousellItem from '../../components/CrimeCarouselItem';
import { FlatList } from 'react-native-gesture-handler';

const CrimesMap = () => {
  const [selectedCrimeId, setSelectedCrimeId] = useState(null);
  const width = useWindowDimensions().width;
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView 
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
          data={crimes}
          renderItem={({item}) => <CrimeCarousellItem crime={item}></CrimeCarousellItem>}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width - 50}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
         />
      </View>
    </View>
  )
}
export default CrimesMap