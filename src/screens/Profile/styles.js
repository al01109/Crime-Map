import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  userInfo: {
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  data: {
    fontSize: 20,
    marginBottom: 20,
  },
  privacyPolicy: {
    fontSize: 18,
    color: '#2196f3',
  },
  deleteAccount: {
    marginTop: 20,
    fontSize: 18,
    color: '#FF0000',
    textDecorationLine: 'underline',
  },
  signOut: {
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signOutButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
    paddingVertical: 15,
    textAlign: 'center',
  },
});

export default styles;
