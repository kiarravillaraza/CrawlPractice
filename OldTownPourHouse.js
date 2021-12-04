import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from './BackgroundCarousel';

var barName = "Old Town Pour House";
var barLocation = "1419 N Wells St, Chicago, IL 60610";
var barBio = "Old Town Pour House is a vibrant bar and restaurant featuring 90 craft beers on tap and modern American food. \n  With a mouthwatering menu and energetic atmosphere, Old Town Pour House is the perfect place for lunch, happy hour, dinner, or your next private party."
var barDays = [ " MONDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" , "SATURDAY", "SUNDAY"]


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

const oldtownpourhouse = [
"https://img1.10bestmedia.com/Images/Photos/371169/20120314--DSC0625_55_660x440.jpg",
"https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/123135372_3531244616898483_355760767610731697_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=2c4854&_nc_ohc=bxJtS-Sp2hEAX_D9qtq&_nc_ht=scontent-ort2-1.xx&oh=d1bc846a268d52685a9cddb6cc224af5&oe=61D20A9A",
"https://img1.10bestmedia.com/Images/Photos/371168/20120314--DSC0504_55_660x440.jpg",
"https://s3-media0.fl.yelpcdn.com/bphoto/vpXQoboEjWorxuM4HMJkbQ/o.jpg",
"https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/105964976_3163320380357577_4349287549466439203_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=2c4854&_nc_ohc=okXGklYSdx0AX-uprCs&_nc_ht=scontent-ort2-1.xx&oh=27daa5ff2747ff36ba6d663007c2e8a9&oe=61D1E40B",


];



class OldTownPourHouse extends React.Component {

    render () {
        return (
          
<View style= {styles.container}>
<BackgroundCarousel images={oldtownpourhouse} />


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
          onPress={() => Linking.openURL('https://www.instagram.com/otpourhouse/')} >
          <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/instagram.png')} />
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/otpourhouse/')} >
          <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/facebook.png')} />
          </Pressable> 
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('https://www.oldtownpourhouse.com/chicago/')} >
    <Image
          style = {{width: 270, height: 175, left: 60, marginTop: 70}}
          source = {require('/Users/kiarravillaraza/CrawlPractice/src/img/oldtownpourhouseLogo.png')} />
</Pressable>
<Text style = {styles.barHours}>
            {"\n"}HOURS
          </Text>
          <Text style = {styles.barDays} >
          {barDays[0]} -
            {"\n"} {barDays[1]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 4PM - 11PM 
            </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[2]}
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 4PM - 12AM
              </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[3]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 11AM - 2AM
            </Text>
            <Text style = {styles.barDays} >
              {"\n"} {barDays[4]}
              </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 10AM - 3AM
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

export default OldTownPourHouse;