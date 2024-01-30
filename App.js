import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/src/screens/WelcomeScreen';
import HomeScreen from './app/src/screens/HomeScreen'
import AppText from './app/src/components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from './app/src/components/AppButton';
import ViewImageScreen from './app/src/screens/ViewImageScreen';
import ListingDeatilsScreen from './app/src/screens/ListingDeatilsScreen';

export default function App() {

  return (
  //  <WelcomeScreen/>

  // <HomeScreen/>
  <ListingDeatilsScreen/>
  // <ViewImageScreen/>

  // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

  //   <View 
  //   style={{
  //     width:70,
  //     height:70,
  //     backgroundColor:'blue',
  //     borderWidth:10,
  //     borderColor:'darkblue',
  //     borderRadius:5,
  //     }}> 

  //   </View>

  //   <MaterialCommunityIcons name='email' size={50}/>

  //   <AppText>I am beginner to react native</AppText>

  //   <AppButton title={login} onPress = {() => console.log("Tapped")}/>

  // </View>


  );
}

