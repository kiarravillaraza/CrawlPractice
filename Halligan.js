import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from './BackgroundCarousel';

var barName = "Halligan Bar";
var barLocation = "2274 N Lincoln Ave, Chicago, IL 60614";
var barBio = "Halligan Bar is located in the heart of Lincoln Park. \n A classic Irish bar known for its great beer selection & fun atmosphere."
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

    "https://scontent-ort2-1.xx.fbcdn.net/v/t31.18172-8/1265409_597327190308488_1288255192_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Nt7rxpnv5wsAX8L7CIt&_nc_ht=scontent-ort2-1.xx&oh=3086fa8ff888d036c75969e99b3602cf&oe=61D11DEB",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/75486107_3388615897846256_7169672044894748672_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=9267fe&_nc_ohc=vLV1E9nWinIAX-Jh9ca&_nc_ht=scontent-ort2-1.xx&oh=f636be04edc297e3b02d85857de9db15&oe=61CED8AE",
   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/201156058_572739830779128_5055751502644027532_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=2c4854&_nc_ohc=fvAoMqkJHekAX9oWPTo&_nc_ht=scontent-ort2-1.xx&oh=102a04e145e82d4fcd5bf2f42ac8a91f&oe=61C1CD88",

   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/192524711_5802701269771028_2585529950976560740_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=hwYH41QLrpYAX_UPYEM&_nc_ht=scontent-ort2-1.xx&oh=39e198be9186f3efc5018cc9a0c1ae63&oe=61CDB009"

 ];



class Halligan extends React.Component {

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
              {"\n"} 5PM - 2AM 
            </Text>
            <Text style = {styles.barDays} >
                {"\n"}{barDays[2]}
            </Text>
            <Text style = {styles.barTimes} >
           
              {"\n"} 12PM - 2AM
              </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[3]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 12PM - 2AM
            </Text>
            <Text style = {styles.barDays} >
              {"\n"} {barDays[4]}
              </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 11AM - 3AM
            </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[5]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 11AM - 2AM
            </Text>

  </View>

  

  
  </View>

  </ScrollView> 
  </View>


        );
}
}

export default Halligan;