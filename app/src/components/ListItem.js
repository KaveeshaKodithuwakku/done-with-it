import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText';
import colors from '../../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({image, title, subTitle, IconComponent, onPress, renderRightActions}) {
    return (
        // <Swipeable renderRightActions={renderRightActions}>
 <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
<View style={styles.container}>
    {IconComponent}
{image && <Image style={styles.image} source={image}/>}

<View>
<AppText style={styles.title}>{title} </AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
</View>

       </View>
        </TouchableHighlight>
        // </Swipeable>
       
       
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
       padding:15,
       backgroundColor: colors.white,
    },
    image:{
        width:70,
        height:70,
        marginRight: 10,
        borderRadius: 35,
    },
    title:{
        fontWeight:'500',
        justifyContent:'center'
    },
    subTitle:{
        color:colors.mediumBlack
    }
})

export default ListItem;