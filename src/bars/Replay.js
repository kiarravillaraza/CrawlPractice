import {StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from '../../BackgroundCarousel';

var barName = "Replay";
var barLocation = "2833 N Sheffield Ave, Chicago, IL 60657";
var barBio = "Replay is your source for quality entertainment since 2012. \n Great cocktails, awesome pop-ups, and did we mention free games?"
var barDays = [ " MONDAY", " THURSDAY", "FRIDAY" , "SATURDAY", "SUNDAY"]



const styles = StyleSheet.create({
    barTitle: {
        padding: 35,
        lineHeight:0, 
        marginLeft: 20,
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
        bottom: 50,
        textAlign: "center",
        padding: 35,
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
          flex: 1,
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

const replay = [
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/76702461_2791448444209752_8930288386313289728_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=mg0AsBtx1-oAX9gVtMR&_nc_ht=scontent-ort2-1.xx&oh=398b5993fdec522a79158cfb90db1bad&oe=61D0F32B",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/80729916_2868131076541488_3183807661082673152_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ACJAKZv32BsAX9i5dR1&tn=tPdjh7UKYw6oFUL6&_nc_ht=scontent-ort2-1.xx&oh=59f732bfa134ac930dc19e407696ea04&oe=61CED9C0",
    "https://media.timeout.com/images/105803093/1372/772/image.jpg",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/72566402_2695414433813154_3872120288170737664_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=qq44E8EpMIIAX9e1ben&_nc_oc=AQm33E9OFn8U--Bf7VhFcAnQ-dAgezFfcn4HqxuZR0cVIVEmP-nQVp2dK_dVc1bG40U&_nc_ht=scontent-ort2-1.xx&oh=1c25f455a0550cc45edda243556cc05d&oe=61CD6604",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/82959556_2912261045461824_6653946309159944192_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=TMjH_R9-ziEAX-p3oTK&_nc_ht=scontent-ort2-1.xx&oh=00bfc5f338e24eb04be411cee67f663d&oe=61CF0FD2",
];

class Replay extends React.Component {

    render () {
        return (

<View style= {styles.container}>
<BackgroundCarousel images={replay} />

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
          onPress={() => Linking.openURL('https://www.instagram.com/replaylincolnpark/')} >
          <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('../img/instagram.png')} />
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/replaylincolnpark')} >
          <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('../img/facebook.png')} />
          </Pressable> 
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('https://www.replaylincolnpark.com')} >
    <Image
          style = {{width: 300, height: 100, left: 50, marginTop: 60}}
          source = {require('../img/replayLogo.png')} />
</Pressable>
<Text style = {styles.barHours}>
            {"\n"}HOURS
          </Text>
            <Text style = {styles.barDays} >
            {barDays[0]} -
            {"\n"}{barDays[1]}
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 5PM - 2AM 
            </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[2]}
            </Text>
            <Text style = {styles.barTimes} >
           
              {"\n"} 3PM - 2AM
              </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[3]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 12PM - 3AM
            </Text>
            <Text style = {styles.barDays} >
              {"\n"} {barDays[4]}
              </Text>
            <Text style = {styles.barTimes} >
            {"\n"}  12PM - 2AM
            </Text>

  </View>

  

  
  </View>

  </ScrollView>
  </View>

        );
}
}

export default Replay;
