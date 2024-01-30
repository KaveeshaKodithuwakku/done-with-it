import React from 'react';
import { Image,View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../../config/colors';

function Card({title, subTitle, image}) {
    return (
       <View style={styles.card}>

        <Image style={styles.image} source={image}/>

        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title} </AppText>
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
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200
    },
    detailsContainer:{
        padding: 20,
    },
    title:{
        marginBottom: 7,
    },
    price:{
        color:colors.primary,
        fontWeight:'bold'
    }

   
})

export default Card;