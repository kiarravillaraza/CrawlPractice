import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from '../../BackgroundCarousel';

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
  "https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/256827177_675290333857410_1923687880662733746_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=BDM-UXkCnPAAX9IpThV&_nc_oc=AQk0mAbHHyLCIrhq8no4O9_Qf1xtMefpvmtYtCa7gXDGk6YS_yttQXjxsg7GpLWzDPE&_nc_ht=scontent-ort2-1.xx&oh=00_AT_e9bhdQMmf_CDM_Ej-FKHS7sm5C0XhBSWsN3p-7_TfWQ&oe=61C40C62",
  "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/78566939_158829685503480_2064189259874566144_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SGMX0In75jAAX-Z2BOl&_nc_ht=scontent-ort2-1.xx&oh=fc51a9b7d411ede02af6349b199f4328&oe=61C38364",
   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/201156058_572739830779128_5055751502644027532_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=2c4854&_nc_ohc=fvAoMqkJHekAX9oWPTo&_nc_ht=scontent-ort2-1.xx&oh=102a04e145e82d4fcd5bf2f42ac8a91f&oe=61C1CD88",
   "https://d1t295ks1d26ah.cloudfront.net/media/pictures/files/000/021/263/xlarge_desktop/77394087_158830698836712_6283762755795156992_o.jpg?1589578908",
   "https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/258091832_676527673733676_8826771448272167123_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=9267fe&_nc_ohc=45beW9nPOJ4AX9y46vO&_nc_ht=scontent-ort2-1.xx&oh=00_AT87sp3XsjsxTvuDmOpRdf_KIYgKYIktmq3BeQU_RX93dw&oe=61C3FAB9",

  ];



class Dime extends React.Component {

    render () {
        return (
          
<View style= {styles.container}>
<BackgroundCarousel images={dime} />


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
          onPress={() => Linking.openURL('https://www.instagram.com/thedimechi/')} >
          <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('../img/instagram.png')} />
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/thedimechi/')} >
          <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('../img/facebook.png')} />
          </Pressable> 
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('https://thedimechi.com')} >
    <Image
          style = {{width: 250, height: 250, left: 70, marginTop: 70}}
          source = {require('../img/dimeLogo.png')} />
</Pressable>
<Text style = {styles.barHours}>
            {"\n"}HOURS
          </Text>
            <Text style = {styles.barDays} >
            {barDays[0]}
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 5PM - 2AM 
            </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[1]}
            </Text>
            <Text style = {styles.barTimes} >
           
              {"\n"} 5PM - 2AM
              </Text>
            <Text style = {styles.barDays} >
                {"\n"} {barDays[2]}
            </Text>
            <Text style = {styles.barTimes} >
            {"\n"}11AM - 3AM
            </Text>
            <Text style = {styles.barDays} >
              {"\n"} {barDays[3]}
              </Text>
            <Text style = {styles.barTimes} >
            {"\n"} 11AM - 6PM
            </Text>

  </View>

  

  
  </View>

  </ScrollView> 
  </View>


        );
}
}

export default Dime;
