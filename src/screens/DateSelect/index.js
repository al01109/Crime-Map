import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from "@react-navigation/native"
import MonthYearPicker from 'react-native-month-year-picker'
import styles from './styles'

const DateSelect = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { longitude, latitude, name }  = route.params;
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2023, 1));

  useEffect(() => {
    setShow(true);
  }, [])

  function onValueChange(event, newDate) {
    if (event == 'dateSetAction') {
      setShow(false);
      setDate(newDate);
      navigation.navigate('Home', {
        screen: 'Explore',
        params: {
          screen: 'SearchResults',
          params: {
            longitude: longitude,
            latitude: latitude,
            date: newDate.getFullYear() + "-" + (newDate.getMonth() + 1),
            name: name
          },
        },
      })
    } else if (event == 'dismissedAction') {
      navigation.navigate('Home', {
        screen: 'Explore',
        params: {
          screen: 'Welcome'
        }
      })
    }
  }

  return (
    <View>
      <Text style={styles.heading}>Filter Crimes By Month</Text>
      {show && (
      <MonthYearPicker
        value={date}
        selectedDate={date}
        onChange={onValueChange}
        minimumDate={new Date(2020, 2)}
        maximumDate={new Date(2023, 1)}
        locale="en"
      />
      )}
    </View>
  )
}

export default DateSelect