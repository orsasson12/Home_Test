import { StyleSheet, Dimensions } from "react-native"
const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#a34d2',
        width: width / 1.1,
        height: 200,
        borderRadius: 25,

    },

    imageStyles: {
        height: 130,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
        width: width - 25,

    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    categoryStyle: {
        fontWeight: '200'
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5
    },

})