import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 10,
        width: '100%',
        aspectRatio: 3 / 2,
    },
    description: {
        fontSize: 16,
        lineHeight: 20,
        marginTop: 4,
        color: '#5e5560',
    },
    name: {
        marginTop: 8,
        fontSize: 17,
        color: '#312b33',
    }
});

export default styles;