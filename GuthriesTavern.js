import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from './BackgroundCarousel';

var barName = "Guthries Tavern";
var barLocation = "1300 W Addison St, Chicago, IL 60613";
var barBio = "Originally the tavern location was a corner grocery store dating back to 1900. \n  After prohibition ended in 1933, the Moretti family turned the grocery into a corner tap."
var barDays = ["MONDAY", "FRIDAY" , "SATURDAY", "SUNDAY"]



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

const halligan = [
    "https://cdn.vox-cdn.com/thumbor/IC1H11puuwCPO9SXnOcp0EGehkE=/0x0:1904x1141/1520x1013/filters:focal(621x127:925x431):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67086133/s.0.png",
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1295286/20130726-DSC_6093_cybe1v.jpg",
"https://s.yimg.com/ny/api/res/1.2/0N8gw9zbtkVnNs8RTmot2A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ3MA--/https://s.yimg.com/uu/api/res/1.2/wGy7Uxb.5WXcwHnCLQ974Q--~B/aD0xMzY1O3c9MjA0ODthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-us/chicago_tribune_local_801/395706ecd66ef693d658f319e82c7bad",
"https://cdn.usarestaurants.info/assets/uploads/c7413c277ef5f8f6d4c28cf5eaf4335d_-united-states-illinois-cook-county-chicago-295459-guthries-tavernhtm.jpg",
"https://cdn.vox-cdn.com/thumbor/bjCbMzrGT1EXsmXGLhWclFY13Sw=/0x0:1272x1532/1200x800/filters:focal(419x879:621x1081)/cdn.vox-cdn.com/uploads/chorus_image/image/67084585/6_11_podgo_guthries_3x.0.jpg"
 ];



class GuthriesTavern extends React.Component {

    render () {
        return (
          
<View style= {styles.container}>
<BackgroundCarousel images={halligan} />


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
          onPress={() => Linking.openURL('https://www.instagram.com/official_guthries_tavern/')} >
          <Image
          style = {{width: 130, height: 130, left: 123, marginTop: 0}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/instagram.png')} />
          </Pressable>

         
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('https://www.guthriestavern.com')} >
    <Image
          style = {{width: 200, height: 250, left: 95, marginTop: 70}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/guthriestavernLogo.jpeg')} />
</Pressable>
<Text style = {styles.barHours}>
{"\n"}HOURS
          </Text>
            <Text style = {styles.barDays} >
            {barDays[0]} -
            {"\n"}{barDays[1]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 3PM - 2AM 
            </Text>
            <Text style = {styles.barDays} >
            {"\n"}
            {barDays[2]} -
            {"\n"}{barDays[3]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 12PM - 3AM 
            </Text>
  </View>

  

  
  </View>

  </ScrollView> 
  
  </View>


        );
}
}

export default GuthriesTavern;