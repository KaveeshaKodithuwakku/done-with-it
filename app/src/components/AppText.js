import React from 'react';
import { Text,StyleSheet, Platform,View } from 'react-native'
import AppButton from './AppButton';
import colors from '../../config/colors';

function AppText({style, children}) {
    // function AppText(props) {
    return (
        // <Text>props.children</Text>
        <View>
                    <Text style={[styles.text,style]}>{children}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    text:{
        color:colors.pink,
    
        ...Platform.select({
            ios:{
                fontSize:10,
                fontFamily: "Avenir"
            },
            android:{
                fontSize:10,
                fontFamily: "Roboto"
            }
        })
    }
})

// const styles = StyleSheet.create({
//     text:{
//      fontSize:18,
//      fontFamily:Platform.OS === "android" ? "Roboto": "Avenir"

//     }
// })

export default AppText;

