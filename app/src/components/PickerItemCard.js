import React from 'react';
import { Image,View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../../config/colors';

function PickerItemCard({title, subTitle, image, imgWidth, imgHeight}) {
    return (
        <View style={styles.card}>
 
         <Image style={{width:imgWidth, height:imgHeight}} source={image}/>
 
         <View style={styles.detailsContainer}>
             <AppText>{title} </AppText>
             <AppText style={styles.price}>{subTitle}</AppText>
             
             </View>
 
 
        </View>
     );
 }
 
 const styles = StyleSheet.create({
     card:{
         backgroundColor: colors.white,
         borderRadius: 15,
         marginBottom: 20,
         overflow:'hidden',
         shadowColor:'gray',
         shadowOffset:{width:20, height:20},
         shadowOpacity:1,
         shadowRadius:0,
         elevation:20,
         marginHorizontal:10,
         padding:10
     },
     detailsContainer:{
        justifyContent:'center',
     },
     price:{
         color:colors.primary,
         fontWeight:'bold'
     }
 
    
 })

export default PickerItemCard;