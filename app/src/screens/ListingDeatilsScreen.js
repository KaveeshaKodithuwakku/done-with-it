import React from 'react';
import { View, StyleSheet,Image } from 'react-native'
import ListItem from '../components/ListItem';
import colors from '../../config/colors';
import AppText from '../components/AppText';

function ListingDeatilsScreen(props) {
    return (
      <View>
        <Image style={styles.image} source={require('../../assets/dev-asangbam-CAo-CL-6a3M-unsplash.jpg')}/>

        <View style={styles.detailContainer}>
        <AppText style={styles.title}>White T-Shirt for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
        </View>

        <View style={styles.userContainer}>
        <ListItem image={require('../../assets/logo.png')} title = "White T-Shirt" subTitle="5 Listings"/>
        </View>

       
      </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    detailContainer:{
        padding: 20,
    },
    title:{
        marginBottom: 7,
    },
    price:{
        color:colors.primary,
        fontWeight:'bold'
    },
    userContainer:{
        marginVertical:20
    }
    
})

export default ListingDeatilsScreen;