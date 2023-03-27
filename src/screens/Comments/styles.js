import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    category: {
        fontWeight: 'bold',
        fontSize: 18,
        
    },
    location: {
        fontSize: 14,
        paddingVertical: 10
    },
    comment: {
        marginHorizontal: 20,
    },
    commentInputContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    commentInput: {
        padding: 20,
      },
    addComment: {
        backgroundColor: "#009688",
        marginHorizontal: 20,
        marginVertical: 10
    },
    commentList: {
        marginBottom: 60
    }
});

export default styles;