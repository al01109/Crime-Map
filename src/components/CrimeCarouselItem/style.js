import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 60,
    padding: 5,
    shadowColor: '#000000',
  },
  category: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 15,
  },
  location: {
    fontSize: 14,
    paddingBottom: 20,
  },
});

export default styles;
