import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  email: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  verificationButton: {
    padding: 10,
    backgroundColor: '#e8e4e3',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
  },
  input: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    borderColor: '#e8e4e3',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 6,
    padding: 10,
  },
});

export default styles;
