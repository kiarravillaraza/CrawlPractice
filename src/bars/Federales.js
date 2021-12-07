import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from '../../BackgroundCarousel';

var barName = "Federales";
var barLocation = "180 N Morgan St, Chicago, IL 60607";
var barBio = "Federales is a lofty, open-air tequila and taco concept with an energetic atmosphere. \n Centered around authentic drinks, creative tacos, and an urban industrial vibe, it's the go-to bar for guests looking to have a great time and memorable experience."
var barDays = [ "MONDAY", " THURSDAY", "FRIDAY" , "SATURDAY", "SUNDAY"]



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

const federales = [
"https://popmenucloud.com/anfshomu/cee25714-1b47-47dd-b4f9-7dc41811578f.jpg",
"https://hhrevolution.com/wp-content/uploads/2019/07/Federales-2-580x400.jpeg",
"https://s3-media0.fl.yelpcdn.com/bphoto/BmxXRxkPs8QKrcjkpCX4zg/o.jpg",
"https://s3-media0.fl.yelpcdn.com/bphoto/tCMsM_BEEcicl_xdJ2fREA/o.jpg",
"https://popmenucloud.com/cdn-cgi/image/width=1536,height=1536,fit=scale-down,format=auto,quality=60/anfshomu/e9eed4d2-549c-4e5c-b10f-23fc07cc4546.jpg"


];



class Federales extends React.Component {

    render () {
        return (
          
<View style= {styles.container}>
<BackgroundCarousel images={federales} />


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
          onPress={() => Linking.openURL('https://www.instagram.com/federaleschicago/')} >
          <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('../img/instagram.png')} />
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/federaleschicago/')} >
          <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('../img/facebook.png')} />
          </Pressable> 
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('https://www.federaleschicago.com')} >
    <Image
          style = {{width: 300, height: 300, left: 45, marginTop: 70}}
          source = {require('../img/federalesLogo.png')} />
</Pressable>
<Text style = {styles.barHours}>
            {"\n"}HOURS
          </Text>
          <Text style = {styles.barDays} >
            {barDays[0]} -
            {"\n"}{barDays[1]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 4PM - 2AM 
            </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[2]}
            </Text>
            <Text style = {styles.barTimes} >
           
              {"\n"} 11PM - 2AM
              </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[3]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 11AM - 3AM
            </Text>
            <Text style = {styles.barDays} >
              {"\n"} {barDays[4]}
              </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 11AM - 10PM
            </Text>

  </View>

  

  
  </View>

  </ScrollView> 
  
  </View>


        );
}
}

export default Federales;