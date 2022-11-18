import React from 'react'
import { View , Text,Modal , Pressable,StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Octicons';

const Item = ({singleItem,setItemModal,itemModal}) => {

            return(
                <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={itemModal}
                    onRequestClose={() => {
                        setItemModal(!itemModal);
                    }}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                           <Icons style={styles.icon}  name='stack' size={22} > <Text style={styles.modalText}>{singleItem?.collections}</Text></Icons>
                           <Icon style={styles.icon} name='like1' size={22} > <Text style={styles.modalText}>{singleItem?.likes}</Text></Icon>
                           <Icon style={styles.icon} name='download' size={20}> <Text style={styles.modalText}>{singleItem?.downloads}</Text></Icon>
                           <Icon style={styles.icon} name='eye' size={22}> <Text style={styles.modalText}>{singleItem?.views}</Text></Icon>
                           <Icons style={styles.icon}  name='comment' size={20}> <Text style={styles.modalText}>{singleItem?.comments}</Text></Icons>
                           <Icons style={styles.icon} name='person' size={20}> <Text style={styles.modalText}>{singleItem?.user}</Text></Icons>
                                <Image style={styles.imageStyles} source={{ uri: singleItem?.userImageURL }} ></Image>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setItemModal(!itemModal)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View> 
        )
    
  
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 30,
        backgroundColor: "#f1f1f1",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent:'center'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
 
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 35,
        textAlign: "center",
        padding:20,
    }, 
     imageStyles: {
        height: 130,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
        width:100,
        margin:20
    },
    icon:{
        margin:10,
        alignSelf:"center"
    }
})
export default Item