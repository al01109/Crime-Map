import { View, FlatList } from 'react-native'
import React from 'react'
import Crime from '../../components/Crime'

const CrimesScreen = (props) => {
   const { crimes } = props;
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