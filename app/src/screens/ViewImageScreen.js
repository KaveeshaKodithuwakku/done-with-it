import React from 'react';
import { View } from 'react-native';
import { Image,StyleSheet } from 'react-native';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (

        <View style={styles.container}>

            <View style={styles.closeIcon}>
                
                <MaterialCommunityIcons name='close' color="white" size={35}/>
                 </View> 

            <View style={styles.deleteIcon}> 
                
            <MaterialCommunityIcons name='trash-can-outline' color="white" size={35}/>
            </View> 

            
 <Image 
       style={styles.image}
       source={require('../../assets/chair.jpg')}
       />
        </View>
      


    )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
    container:{
        flex:1,
        backgroundColor:colors.black
    },
    closeIcon:{
        position:'absolute',
        top:50,
        left:30,
    },
    deleteIcon:{
        position:'absolute',
        top:50,
        right:30,
    }
})

export default ViewImageScreen;