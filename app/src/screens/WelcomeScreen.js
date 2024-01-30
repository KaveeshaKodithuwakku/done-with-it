import React from 'react';
import { ImageBackground,StyleSheet,View,Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import App from '../../../App';
import colors from '../../config/colors';

function WelcomeScreen(props) {
    return (
      <ImageBackground
      blurRadius={10} 
      style={styles.background}
      source={require('../../assets/welcomeBackground.jpg')}>

        <View style={styles.logoCOntainer}>
        <Image style={styles.logoIc} source={require('../../assets/logo.png')} />

<Text style={styles.tagLine}> We make online selling superbly easy</Text>
        </View>

    <View>
    <AppButton title={Login}/>

    <AppButton title={SignUp} bgColor ="secondary"/>

        </View>   






      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
   logoIc:{
        width:100,
        height:100,
    },
    tagLine:{
        top:10,
        color:'#AA336A',
        fontWeight:'bold',
        fontSize:25
    },
    logoCOntainer:{
        position:'absolute',
        top:70,
        alignItems:'center',
    },
    buttonContainer:{
      width:'100%',
      padding:20,
    
    }
    
})

export default WelcomeScreen;