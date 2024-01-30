import React from 'react';
import { StyleSheet,Text,TouchableOpacity } from 'react-native'
import colors from '../../config/colors';

function AppButton({title,onPressed,bgColor ="primary"}) {
    return (
        <TouchableOpacity styles={[styles.button,{backgroundColor:colors[bgColor]}]} onPressed ={onPressed}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        width:'100%',
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        marginVertical:10
    },
    text:{
        color:colors.secondary,
        fontSize:10,
        fontWeight:'bold'
    }
})

export default AppButton;