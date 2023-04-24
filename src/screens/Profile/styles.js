import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    margin: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  data: {
    fontSize: 18,
  },
  signOut: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: '90%',
  },
  privacyPolicy: {
    marginTop: 10,
    fontSize: 18,
  },
  deleteAccount: {
    marginTop: 10,
    fontSize: 18,
    color: 'red',
  },
});

export default styles;
