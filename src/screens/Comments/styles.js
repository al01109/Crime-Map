import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  crimeContainer: {
    margin: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  outcomeContainer: {
    margin: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  location: {
    fontSize: 16,
    paddingVertical: 10,
  },
  date: {
    fontSize: 16,
    paddingVertical: 10,
  },
  comment: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  commentInputContainer: {
    margin: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  commentInput: {
    padding: 20,
  },
  addComment: {
    backgroundColor: '#2196f3',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default styles;
