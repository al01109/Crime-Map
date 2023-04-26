import {
  View,
  Button,
  Modal,
  Text,
  Switch,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {HeaderBackButton} from '@react-navigation/elements';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useRoute, useNavigation} from '@react-navigation/native';
import CrimesScreen from '../screens/Crimes';
import CrimesMap from '../screens/CrimesMap';
import CrimeStatistics from '../screens/CrimeStats';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => {
  const route = useRoute();
  const navigation = useNavigation();
  const {longitude, latitude, date, name} = route.params;
  const [crimes, setCrimes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const categories = Array.from(new Set(crimes.map(crime => crime.category)));
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const filteredCrimes = crimes.filter(crime =>
    selectedCategories.includes(crime.category),
  );
  const crimeCount = filteredCrimes.length;
  const totalCrimeCount = crimes.length;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    const fetchCrimes = async () => {
      try {
        fetch(
          `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`,
        )
          .then(res => res.json())
          .then(result => {
            setCrimes(result);
            const categories = Array.from(
              new Set(result.map(crime => crime.category)),
            );
            setSelectedCategories(categories);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchCrimes();
    navigation.setOptions({
      title: name + ' ' + date,
      headerLeft: () => (
        <HeaderBackButton
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'Welcome',
              },
            })
          }
        />
      ),
    });
  }, []);

  return (
    <>
      <Pressable onPress={toggleModal} style={styles.filterButton}>
        <Text style={styles.buttonText}>
          Showing {crimeCount} / {totalCrimeCount} Crimes
        </Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Filter Crimes </Text>
          <AntDesign name="filter" size={20} color="black" />
        </View>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%',
            backgroundColor: 'white',
          }}>
          <Text style={styles.title}>Filter Crimes by Category</Text>

          {categories.map(category => (
            <View key={category} style={styles.container}>
              <Text style={styles.category}>{category}</Text>
              <View style={styles.switch}>
                <Switch
                  value={selectedCategories.includes(category)}
                  onValueChange={value => {
                    if (value) {
                      setSelectedCategories([...selectedCategories, category]);
                    } else {
                      setSelectedCategories(
                        selectedCategories.filter(c => c !== category),
                      );
                    }
                  }}
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={'#f4f3f4'}
                />
              </View>
            </View>
          ))}
          <View style={styles.button}>
            <Button
              onPress={toggleModal}
              title={'View ' + crimeCount + ' Crimes'}
            />
          </View>
        </View>
      </Modal>

      <Tab.Navigator>
        <Tab.Screen name={'Map'}>
          {() => (
            <CrimesMap
              crimes={crimes.filter(crime =>
                selectedCategories.includes(crime.category),
              )}
              longitude={longitude}
              latitude={latitude}></CrimesMap>
          )}
        </Tab.Screen>
        <Tab.Screen name={'Comments'}>
          {() => (
            <CrimesScreen
              crimes={crimes.filter(crime =>
                selectedCategories.includes(crime.category),
              )}></CrimesScreen>
          )}
        </Tab.Screen>
        <Tab.Screen name={'Statistics'}>
          {() => <CrimeStatistics crimes={crimes}></CrimeStatistics>}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default SearchResultsTabNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingVertical: 3,
  },
  title: {
    position: 'absolute',
    top: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: '60%',
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  switch: {
    paddingRight: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: 100,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
  },
});
