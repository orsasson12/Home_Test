import React from 'react'
import { SafeAreaView, Text, View,TouchableOpacity } from 'react-native';
//import Card
import { Card } from 'react-native-paper';
import { styles } from './CategoriesStyles'
import {SelectList} from 'react-native-dropdown-select-list'
import {categorySelection} from '../../categoryData'
function Categories({setCategory}) {
  return (
   <SafeAreaView style={styles.container}>
      <View style={styles.container}> 
   
    <SelectList
      data={categorySelection}
      setSelected={(val) =>setCategory(val)}
      save='value'
      placeholder='Select Category'
      boxStyles={styles.boxStyle}
      dropdownTextStyles={{fontSize:20,fontWeight: 'bold'}}
    />
      </View>
    </SafeAreaView>
  )
}

export default Categories