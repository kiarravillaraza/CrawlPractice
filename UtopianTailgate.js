import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from './BackgroundCarousel';

var barName = "Utopian Tailagate";
var barLocation = "1608 N Wells St, Chicago, IL 60614";
var barBio = "The Tailgate Party that lasts all year long. \n Perched high atop Piper's Alley, above world-famous comedy enclave The Second City, Utopian Tailgate is Chicago's newest never-ending rooftop partyscape."
var barDays = [ " THURSDAY", "FRIDAY" , "SATURDAY", "SUNDAY"]



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

const utopian = [
"https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/186564204_1151988261984497_4821527613847711828_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=9267fe&_nc_ohc=un3NJn2zzlcAX9mcyVo&_nc_ht=scontent-ort2-1.xx&oh=3a5de757399e1b52b4c1a50d73832d3b&oe=61D23303",
"https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/101299524_899946000522059_7547170047823708160_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=9267fe&_nc_ohc=X5rNbnK7eJ8AX90vtmO&tn=tPdjh7UKYw6oFUL6&_nc_ht=scontent-ort2-1.xx&oh=0be6e9bc70f8bcb65f5cc0c760f5a311&oe=61D011AE",
"https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/86738715_823351574848169_534710556335013888_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=kgGYEIfhFFUAX-rqbGW&_nc_oc=AQk5dbUM45aflG_fLy68IhNV1VDMk8n9PojQT2qLGfwaG8YcKRK3ZYOQPykmz0ga4ss&_nc_ht=scontent-ort2-1.xx&oh=7d466ef5a21d8a1969d4526825958de3&oe=61D22D73",
"https://assets3.thrillist.com/v1/image/2975414/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg",
"https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/160034746_1106228256560498_2557919106286750310_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=2hqZxkVBW1oAX8nZ5JK&_nc_ht=scontent-ort2-1.xx&oh=e6d6fe10a848105f790f096ed6068799&oe=61D259B8"

];



class UtopianTailgate extends React.Component {

    render () {
        return (
          
<View style= {styles.container}>
<BackgroundCarousel images={utopian} />


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
          onPress={() => Linking.openURL('https://www.instagram.com/utopiantailgate/')} >
          <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/instagram.png')} />
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/utopiantailgate/')} >
          <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/facebook.png')} />
          </Pressable> 
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('https://www.utopiantailgate.com')} >
    <Image
          style = {{width: 200, height: 200, left: 95, marginTop: 70}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/utopiantailgateLogo.png')} />
</Pressable>
<Text style = {styles.barHours}>
            {"\n"}HOURS
          </Text>
            <Text style = {styles.barDays} >
            {barDays[0]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 4PM - 11PM 
            </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[1]}
            </Text>
            <Text style = {styles.barTimes} >
           
              {"\n"} 2PM - 2AM
              </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[2]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 11AM - 3AM
            </Text>
            <Text style = {styles.barDays} >
              {"\n"} {barDays[3]}
              </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 11AM - 7PM
            </Text>

  </View>

  

  
  </View>

  </ScrollView> 
  
  </View>


        );
}
}

export default UtopianTailgate;