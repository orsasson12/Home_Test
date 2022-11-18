import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('screen')
console.log(width);
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
    },
    image: {
        width: width / 2,
        margin: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        borderRadius: 5,
        height: 120,
        alignSelf:"center"
    },
    boxStyle:{
        width: width /1.5
    }
})