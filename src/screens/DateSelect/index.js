import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import MonthYearPicker from 'react-native-month-year-picker';
import styles from './styles';

const DateSelect = () => {
  const {
    params: {longitude, latitude, name},
  } = useRoute();
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2023, 1));

  useEffect(() => {
    setShow(true);
  }, []);

  const handleDateChange = (event, selectedDate) => {
    if (event === 'dateSetAction') {
      setShow(false);
      setDate(selectedDate);
      navigateToSearchResults(longitude, latitude, selectedDate, name);
    } else if (event === 'dismissedAction') {
      navigateToWelcomeScreen();
    }
  };

  const navigateToSearchResults = (longitude, latitude, selectedDate, name) => {
    const formattedDate = `${selectedDate.getFullYear()}-${
      selectedDate.getMonth() + 1
    }`;
    navigation.navigate('Home', {
      screen: 'Explore',
      params: {
        screen: 'SearchResults',
        params: {
          longitude,
          latitude,
          date: formattedDate,
          name,
        },
      },
    });
  };

  const navigateToWelcomeScreen = () => {
    navigation.navigate('Home', {
      screen: 'Explore',
      params: {
        screen: 'Welcome',
      },
    });
  };

  return (
    <View>
      <Text style={styles.heading}>Filter Crimes By Month</Text>
      {show && (
        <MonthYearPicker
          value={date}
          selectedDate={date}
          onChange={handleDateChange}
          minimumDate={new Date(2020, 2)}
          maximumDate={new Date(2023, 1)}
          locale="en"
        />
      )}
    </View>
  );
};

export default DateSelect;
