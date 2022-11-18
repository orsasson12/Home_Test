import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 42

    },
    headerContainer2: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        marginTop:30
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.5,
    },
    button: {
        backgroundColor: 'rgba(11,127,171,1)',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 9
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 62
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'scroll',
    },

    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",

    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
