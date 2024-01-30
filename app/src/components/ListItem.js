import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText';
import colors from '../../config/colors';

function ListItem({image, title, subTitle}) {
    return (
       <View style={styles.container}>

<Image style={styles.image} source={image}/>

<View>
<AppText style={styles.title}>{title} </AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
</View>

       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginLeft:20
    },
    image:{
        width:70,
        height:70,
        marginRight: 10,
        borderRadius: 35,
    },
    title:{
        fontWeight:'500'
    },
    subTitle:{
        color:colors.mediumBlack
    }
})

export default ListItem;