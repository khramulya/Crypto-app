import { StyleSheet } from 'react-native';
import { withDecay } from 'react-native-reanimated';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    root: {
        flex:1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    image: {
        height: 170,
        resizeMode: "contain",
    },
    balanceContainer: {
        marginVertical: 20,
        width: '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777',
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold',
        
    }
});

export default styles;