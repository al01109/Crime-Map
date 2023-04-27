import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#dadada',
    borderRadius: 10,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
  },
  location: {
    fontSize: 14,
    paddingBottom: 10,
  },
  save: {
    position: 'absolute',
    bottom: 10,
    right: -8,
  },
  share: {
    position: 'absolute',
    top: 10,
    right: 11,
  },
});

export default styles;
