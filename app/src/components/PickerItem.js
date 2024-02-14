import React from 'react';
import { TouchableOpacity , StyleSheet, View} from 'react-native';
import Card from './Card';
import PickerItemCard from './PickerItemCard';

function PickerItem({categoryName, image, onPress}) {
    return (
       <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
        <PickerItemCard title={categoryName} image={image} imgWidth={100} imgHeight={80} />
        </View>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10
    }
})

export default PickerItem;