import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex:1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle:{
        fontSize: 18,
        marginVertical: 10,
        color: '#5f5f5f',
    },
    image:{
        height: 200,
        resizeMode: 'contain',
    },

    inputsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },

    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#b1b1b1',
        padding: 15,
        flex: 1,
        margin: 20,
    },
});

export default styles;
