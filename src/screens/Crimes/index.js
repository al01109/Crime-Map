import { View, FlatList } from 'react-native'
import React from 'react'
import crimes from '../../../assets/data/crimes'
import Crime from '../../components/Crime'

const CrimesScreen = () => {
  return (
    <View>
      <FlatList
        data={crimes}
        renderItem={({item}) => <Crime crime={item} />}
      />
    </View>
  )
}

export default CrimesScreen