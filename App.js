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
import GuthriesTavern from "./GuthriesTavern";
import Halligan from "./Halligan";
import HappyCamper from "./HappyCamper";
import Replay from "./Replay";
import Sluggers from "./Sluggers";
import UtopianTailgate from "./UtopianTailgate";



 export default class App extends Component {
   render() {
     return (
      
     <View style={styles.container}>


            {/* <Dime />            */}
            {/* <Replay /> */}
            {/* <Halligan /> */}
            {/* <HappyCamper /> */}
                {/* <Sluggers /> */}
                {/* <GuthriesTavern /> */}
              <UtopianTailgate />

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









