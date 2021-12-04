import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from './BackgroundCarousel';

var barName = "Sluggers World Class Sports Bar";
var barLocation = "3540 N Clark St, Chicago, IL 60657";
var barBio = "Halligan Bar is located in the heart of Lincoln Park. \n A classic Irish bar known for its great beer selection & fun atmosphere."
var barDays = ["MONDAY", " THURSDAY", "FRIDAY" , "SUNDAY"]



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
          height: '7%',
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

const sluggers = [

"http://www.sluggersbar.com/images/z23.jpg",    
"http://www.sluggersbar.com/images/OS14_12.jpg",
"http://www.sluggersbar.com/images/z10.jpg",
"http://www.sluggersbar.com/images/IG_Pic4.jpg",
"https://www.gayot.com/images/reviews/sluggers.jpg"

 ];



class Sluggers extends React.Component {

    render () {
        return (
          
<View style= {styles.container}>
<BackgroundCarousel images={sluggers} />


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
          onPress={() => Linking.openURL('https://www.instagram.com/halliganbar/')} >
          <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/instagram.png')} />
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/halliganbarchicago/')} >
          <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/facebook.png')} />
          </Pressable> 
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('https://halliganbarchicago.wordpress.com')} >
    <Image
          style = {{width: 275, height: 275, left: 60, marginTop: 70}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/halliganLogo.png')} />
</Pressable>
<Text style = {styles.barHours}>
            {"\n"}HOURS
          </Text>
            <Text style = {styles.barDays} >
            {barDays[0]} -
            {"\n"}{barDays[1]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 4PM - 10:30PM 
            </Text>
            <Text style = {styles.barDays} >
            {barDays[2]} -
            {"\n"}{barDays[3]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 4PM - 10:30PM 
            </Text>
  </View>

  

  
  </View>

  </ScrollView> 
  
  </View>


        );
}
}

export default Sluggers;