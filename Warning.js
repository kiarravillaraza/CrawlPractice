import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from './BackgroundCarousel';

var barName = "The Dime";
var barLocation = "2263 N Lincoln Ave, Chicago, IL 60614";
var barBio = "The Dime is in the heart of Lincoln Park! \n A sports bar perfect for every occasion."
var barDays = [" THURSDAY", "FRIDAY" , "SATURDAY", "SUNDAY"]



const styles = StyleSheet.create({
    barTitle: {
    padding: 35,
    lineHeight:0, 
    margin: 20,
    fontSize: 45,
    color: "#fff",
    textAlign: "center",
    bottom: 50,
    fontWeight: "bold",
    fontFamily: "Futura",
    letterSpacing: 3.5,
    },
    barAddress: {
        fontSize: 20,
        color: "#ededed",
        textAlign: "center",
        bottom: 50,
        fontWeight: "bold",
        fontFamily: "Futura",
        letterSpacing: 3.5,
        },
      barTimes: {
          fontSize: 20,
          color: "#ededed",
          textAlign: "center",
          bottom: 50,
          fontWeight: "bold",
          fontStyle: "italic",
          fontFamily: "Futura",
          letterSpacing: 3.5,
        },
    barDays: {
        fontSize: 30,
        color: "#fff",
        lineHeight: 50,
        textAlign: "center",
        bottom: 50,
        fontWeight: "bold",
        fontFamily: "Futura",
        letterSpacing: 3.5,
        },
      barHours: {
        padding: 35,
        margin: 20,
        fontSize: 40,
        color: "#ededed",
        textAlign: "center",
        bottom: 50,
        fontWeight: "bold",
        fontFamily: "Futura",
        letterSpacing: 3.5,
        },
        barBiography: {
          padding: 35,
          margin: 20,
          fontSize: 35,
          color: "#ededed",
          textAlign: "center",
          fontStyle: "italic",
          bottom: 50,
          fontFamily: "Futura",
          letterSpacing: 3.5,
          },
        container1: {
          flexGrow: 1,
          width: '100%',
          backgroundColor: '#81d9aa'
        },
        container2: {
          flex: 1, 
          width: '100%',
          backgroundColor: '#0f0f0f'
        },
        container3: {
          flex: 1, 
          width: '100%',
          backgroundColor: 'black'
        },
        socials: {
          width: '100%',
          height: '8%',
          flexDirection: 'row',
          backgroundColor: '#81d9aa'

        },
        container: {
          flex:1,
          justifyContent: "center",
          backgroundColor: 'black',
          alignItems: "center",
        },
   
      
        
});

const dime = [
  "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/256827177_675290333857410_1923687880662733746_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=Q2Z2IEDrUfQAX-j6X92&_nc_oc=AQmnx8q1Kd6KunZEIf3cqiSCHiA0jfKVzx6I_AB6FGS8I2RGQ8IFTXzmx4XjY3gDqt4&_nc_ht=scontent-ort2-2.xx&oh=16ca92d1a008904282f7952da82418a6&oe=61AE4BA2",
   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/78566939_158829685503480_2064189259874566144_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SGMX0In75jAAX-Z2BOl&_nc_ht=scontent-ort2-1.xx&oh=fc51a9b7d411ede02af6349b199f4328&oe=61C38364",
   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/201156058_572739830779128_5055751502644027532_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=2c4854&_nc_ohc=fvAoMqkJHekAX9oWPTo&_nc_ht=scontent-ort2-1.xx&oh=102a04e145e82d4fcd5bf2f42ac8a91f&oe=61C1CD88",
   "https://d1t295ks1d26ah.cloudfront.net/media/pictures/files/000/021/263/xlarge_desktop/77394087_158830698836712_6283762755795156992_o.jpg?1589578908",
   "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/258091832_676527673733676_8826771448272167123_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=9267fe&_nc_ohc=wtnCrkbFXIUAX_r7oGi&_nc_ht=scontent-ort2-2.xx&oh=b44199efd21a054363d908db1ae80496&oe=61AE39F9",

 ];



class Warning extends React.Component {

    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <View style={{width: 300, height:100, left: 0, backgroundColor: 'white'}}>
            <Text style ={{marginTop: 30, left: 30, fontSize: 25, fontFamily: "Futura", fontStyle: "italic", fontWeight: "bold", color: 'black'}}>
             ARE YOU OVER 21?
             {"\n"}
           </Text>
           </View>
           <View style ={styles.warningButtons}>
           <Button 
             color= 'white'
             title="NO"
             onPress={() => Alert.alert("Sorry! \n Please come back and visit us when you're 21!")}
           />
           <Button
             color= 'white'
             title="YES"
             onPress={() => navigation.navigate('NeighborhoodList')}
           />
           </View>
         </View>



        );
}
}

export default Warning;
