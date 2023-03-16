import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import crimes from '../../../assets/data/crimes';

const CrimesMap = () => {
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
            />
        )}
      </MapView>
    </View>
  )
}

export default CrimesMap