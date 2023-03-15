import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 615,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      searchButton: {
        backgroundColor: '#fff',
        height: 55,
        width: Dimensions.get('screen').width - 40,
        borderRadius: 28,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 4,
      },
      searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default styles;