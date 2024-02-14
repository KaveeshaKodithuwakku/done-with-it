import React, { useState } from 'react';
import { View,StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import Screen from './Screen';
import colors from '../../config/colors';
import PickerItem from './PickerItem';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './AppText';




function AppPicker({icon, items, onSelectedItem, placeholder, selectedItem}) {

  const [modalVisible, setModalVisible] = useState(false);

    return (
      <>
       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
<View style={styles.container}>
         {/* <MaterialCommunityIcons name="apps" size={20} color={colors.mediumBlack}/> */}
        {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.mediumBlack}/>}
        <AppText style={styles.text}>{selectedItem? selectedItem.categoryName : placeholder}</AppText>

        <MaterialCommunityIcons name="chevron-down" size={20} color={colors.mediumBlack}/>
      </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType='slide'>
        <Screen> 
          <Button title='Close' onPress={() => setModalVisible(false)}></Button>
           <MaterialCommunityIcons name="close" color={colors.black} size={20}/>

          <FlatList data={items}
          numColumns={2}
          keyExtractor={category => category.id}
          renderItem={({item}) => 
           <PickerItem categoryName={item.categoryName} image={item.image}
            onPress={() => {
              setModalVisible(false);
              onSelectedItem(item);
            }}/>
          }/>
        </Screen>
        </Modal>
      </>
     
        
    );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: 'row',
    width:'100%',
    padding: 15,
    marginVertical: 10,
},
text:{
  flex: 1,
  width:300,
  justifyContent:'center',
  alignItems:'center'
}
})

export default AppPicker;