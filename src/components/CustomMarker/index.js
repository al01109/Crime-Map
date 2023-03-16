import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps';

const CustomMarker = (props) => {
    const { coordinate, category, onPress, isSelected } = props;
  return (
    <Marker coordinate={{latitude: parseFloat(coordinate.latitude), longitude: parseFloat(coordinate.longitude)}} onPress={onPress}>
      <View style={{
        backgroundColor: isSelected ? "black" : "white",
        padding: 5,
        borderRadius: 20,
        borderColor: "grey",
        borderWidth: 1,
      }}>
        <Text style={{ color: isSelected ? "white" : "black", fontWeight: "bold" }}>{category}</Text>
      </View>
    </Marker>
  )
}

export default CustomMarker