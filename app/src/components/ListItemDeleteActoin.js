import React from 'react';
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../../config/colors';

function ListItemDeleteActoin({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
 <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={35} color="white"/>
    </View>
        </TouchableWithoutFeedback>
   
    );
}

const styles = StyleSheet.create({
    container:{
        width:70,
        backgroundColor: colors.orange,
        justifyContent:'center'
    }
})

export default ListItemDeleteActoin;