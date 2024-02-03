import React from 'react';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native';

function Icon({
    name,
    backgroundColor = colors.black,
    size = 40,
    iconColor = colors.white
}) {
    return (
      <View style={{width:size, height:size, borderRadius: size/2, backgroundColor: backgroundColor, justifyContent:'center',alignItems:'center'}}>
        <MaterialCommunityIcons name={name} backgroundColour={backgroundColor} size={size-20} color={iconColor}/>
      </View>
    );
}

const styles = StyleSheet.create({
        
})

export default Icon;