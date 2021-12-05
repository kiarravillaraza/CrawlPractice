import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from './BackgroundCarousel';

var barName = "Happy Camper";
var barLocation = "3458 N Clark St, Chicago, IL 60657";
var barBio = "Happy Camper came to fill a pizza-void. \n Happy Camper also came to have a damn good time. \n If you ask them, the experts, there's not a better combination of pizza, booze, vibes, and happiness in the whole universe than what you'll get here."
var barDays = ["MONDAY", "WEDNESDAY", " THURSDAY", "FRIDAY" , "SATURDAY", "SUNDAY"]



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
          fontSize: 33,
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
          height: '6%',
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

const happycamper = [
"https://images.otstatic.com/prod/28117442/2/huge.jpg",
"https://www.chicagotribune.com/resizer/9zBitcXuYWji-eyuvl9O0bJV160=/800x533/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/5LVIDUNDMFHB5A4S22LMPKAOPQ.jpg",
"https://s3-media0.fl.yelpcdn.com/bphoto/VaSEwB0xSKPNp1Yjx7eznA/o.jpg",
"https://s3-media0.fl.yelpcdn.com/bphoto/3U4MyNhyXmMldRTQ4EjdSQ/o.jpg",
"https://cdn3.localdatacdn.com/il/chicago/5262042/original/PVuNz0cBdo.jpg"

];



class HappyCamper extends React.Component {

    render () {
        return (
          
<View style= {styles.container}>
<BackgroundCarousel images={happycamper} />


<ScrollView keyboardShouldPersistTaps="always" style={{position: "absolute", bottom: 0, height: "60%", width: "100%"}}> 

  <View style = {styles.container}>


    <View style = {styles.container1}>
      <Text>
      {"\n"}
      <Text style = {styles.barTitle}>
        {barName}
      </Text>
            <Text style = {styles.barAddress} >
            {"\n"}{barLocation}
            </Text>
            {"\n"}
      </Text>
    </View>



    <View style = {styles.container2}>
        <Text>
            <Text style = {styles.barBiography} >
            {"\n"}
            {barBio}
            {"\n"}
            </Text>
          </Text>
    </View>


    <View style = {styles.socials}> 
          <Pressable 
          onPress={() => Linking.openURL('https://www.instagram.com/happycamperchicago/')} >
          <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('./src/img/instagram.png')} />
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/happycamperwrigleyville/')} >
          <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('./src/img/facebook.png')} />
          </Pressable> 
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('http://happycamper.pizza/wrigley')} >
    <Image
          style = {{width: 210, height: 110, left: 85, marginTop: 70}}
          source = {require('./src/img/happycamperLogo.gif')} />
</Pressable>
<Text style = {styles.barHours}>
            {"\n"}HOURS
          </Text>
            <Text style = {styles.barDays} >
            {barDays[0]} -
            {"\n"}{barDays[1]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 10:30AM - 11PM 
            </Text>
            <Text style = {styles.barDays} >
                {"\n"}{barDays[2]}
            </Text>
            <Text style = {styles.barTimes} >
           
              {"\n"} 10:30AM - 12AM
              </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[3]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 10:30AM - 1AM
            </Text>
            <Text style = {styles.barDays} >
              {"\n"} {barDays[4]}
              </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 10AM - 1AM
            </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[5]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 10AM - 11PM
            </Text>
  </View>

  

  
  </View>

  </ScrollView> 
  
  </View>


        );
}
}

export default HappyCamper;