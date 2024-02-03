import React from 'react';
import AppTextInput from './AppTextInput';

function AppPicker(props) {
    return (
        <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.mediumBlack}/>}
        <AppTextInput style={styles.text} {...OtherProps}  />
      </View>
    );
}

export default AppPicker;