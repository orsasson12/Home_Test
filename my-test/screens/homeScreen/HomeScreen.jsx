import React,{useEffect, useState} from 'react'
import {View , Text,Pressable,Modal,SafeAreaView, FlatList} from 'react-native'
import { styles } from './HomeStyles'
import { useLocation } from 'react-router-dom';
import Categories from '../../components/categories/Categories';
import {getItems} from '../../actions/products'

import {useDispatch,useSelector} from 'react-redux'
import Items from '../../components/items/Items';
import Item from '../../components/item/Item';
function HomeScreen() {
  const dispacth = useDispatch()
  const items = useSelector(state => state.items.items)
    const [page,setPage] = useState(1)
    const [category,setCategory] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [itemModal,setItemModal] = useState(false);
    const [itemId,setItemId] = useState(0)
    const singleItem = items.find((item) => item.id === itemId)
  
    useEffect(()=>{
      if(page < 1){
        return
      }
      dispacth(getItems(page,category))
    },[page,category])

    const handleNextPage = () =>{
      setPage((prevPage)=> prevPage + 1)
    }
    const handlePrevPage = () =>{
      if(page <= 1){
        return
      }
      setPage((prevPage)=> prevPage - 1)
    }



  return (
    <View style={styles.mainContainer}>
    <SafeAreaView style={styles.headerContainer}>
      <Pressable  style={styles.button}  onPress={() => setModalVisible(true)}>
          <Pressable style={styles.button}  onPress={handlePrevPage}>
        <Text style={styles.buttonText}>Prev</Text>
      </Pressable>
        <Text style={styles.buttonText}>Category</Text>
      </Pressable>
    <Pressable style={styles.button} >
        <Text style={styles.buttonText} onPress={handleNextPage}>Next</Text>
      </Pressable>
      
        <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalText}>
              <Categories setModalVisible={setModalVisible} setCategory={setCategory}/>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
          
        </View>
      </Modal>
    </View>
    </SafeAreaView>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Text style={{fontSize:15}}>Page: {page}</Text>
        <Text style={{fontSize:15}}>Category: {category}</Text>
      </View>
    <View style={styles.headerContainer2}>
    
       <FlatList
        data={items}
        renderItem={({item})=> <Items item={item}  setItemId={setItemId} setItemModal={setItemModal} /> }
        keyExtractor={item => item.id}
      />
      <Item singleItem={singleItem} setItemModal={setItemModal} itemModal={itemModal}/>
      {/* {items.map((item,i)=>{
        return(
          <View key={item.id}>
          <Items item={item}/>
          </View>
        )
      })} */}
    </View>
    </View>
  )
}

export default HomeScreen