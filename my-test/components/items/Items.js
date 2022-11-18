import React from 'react'
import { ImageBackground, Image, Text, View, Pressable, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './ItemStyles'


const Items = ({ item, setItemId, setItemModal }) => {

    const handlePress = (id) => {
        setItemId((prevId) => prevId = id)
        setItemModal(true)
    }
    return (
        <View style={styles.cardContainer} >
            <Pressable onPress={() => handlePress(item.id)}>
                <Image style={styles.imageStyles} source={{ uri: item.webformatURL }} ></Image>
                <Text style={styles.titleStyle}>{item.views} Views</Text>
                <Text>{item.downloads} Downloads</Text>
                <Text>{item.collections} Collections</Text>
            </Pressable>

        </View>
    )
}

export default Items