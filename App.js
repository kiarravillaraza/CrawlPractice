/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import React, { Component } from "react";
 import { Platform, Button, SafeAreaView, Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
 import {BackgroundCarousel} from './BackgroundCarousel'
 import Dime from "./Dime";


 const dime = [

   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/78566939_158829685503480_2064189259874566144_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SGMX0In75jAAX-Z2BOl&_nc_ht=scontent-ort2-1.xx&oh=fc51a9b7d411ede02af6349b199f4328&oe=61C38364",
   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/201156058_572739830779128_5055751502644027532_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=2c4854&_nc_ohc=fvAoMqkJHekAX9oWPTo&_nc_ht=scontent-ort2-1.xx&oh=102a04e145e82d4fcd5bf2f42ac8a91f&oe=61C1CD88",
   "https://d1t295ks1d26ah.cloudfront.net/media/pictures/files/000/021/263/xlarge_desktop/77394087_158830698836712_6283762755795156992_o.jpg?1589578908"

 ];

 export default class App extends Component {
   render() {
     return (
      
     <View style={styles.container}>

{/* button press will trigger the view change (ex: images, bar info, etc) */}
        <BackgroundCarousel images={dime} />
        {/* <ScrollView style={{position: "absolute", bottom: 0, height: "60%", width: "100%"}}>
        { */}
         
            <Dime />

 

        
        {/* }

        </ScrollView> */}

    </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     backgroundColor: 'black',
     alignItems: "center",
   },
   welcome: {
     fontSize: 40,
     color: "#fff",
     textAlign: "center",
     bottom: 50,
     fontWeight: "bold",
     fontFamily: "Futura",
     letterSpacing: 3.5,
     margin: 10
   },
   instructions: {
     textAlign: "center",
     color: "#333333",
     fontFamily: "Economica-Bold",
     marginBottom: 5
   }
 });









