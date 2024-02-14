import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../../config/colors';

function AppTextInput({icon, ...OtherProps}) {
    return (
      <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.mediumBlack}/>}
        <TextInput style={styles.text} {...OtherProps}  />
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.lightGray,
        borderRadius: 25,
        flexDirection: 'row',
        width:'100%',
        padding: 15,
        marginVertical: 10,
    },
    text:{
        fontSize: 14,
    }
})

export default AppTextInput;