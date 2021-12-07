import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from '../../BackgroundCarousel';

var barName = "Sluggers World Class Sports Bar";
var barLocation = "3540 N Clark St, Chicago, IL 60657";
var barBio = "Since 1985 Sluggers World Class Sports Bar and Grill has been giving the Wrigleyville area a place to go for much more than just a drink. \n With massive HD big screens and over 30 TV's to see all of your favorite sports teams in glorious HD, you'll never miss a minute of any sports action! "
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
"https://www.chicagotribune.com/resizer/By0CC6p-bIlhwczuyTBflXtp_bw=/800x449/top/www.trbimg.com/img-59fc7c4a/turbine/ct-1509719108-8tpy4rzvrx-snap-image",
"https://media.gettyimages.com/photos/chicago-fans-gather-at-sluggers-bar-to-watch-the-chicago-cubs-take-on-picture-id620780276?k=20&m=620780276&s=612x612&w=0&h=xG0oEz7WlToMYoQPF_9JiVZUNn449fbwDItTRkiZ3pk=",
"https://scontent-ort2-1.xx.fbcdn.net/v/t1.18169-9/525928_10150690958366850_301792894_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Iazl8tjkx1QAX8plk_k&_nc_ht=scontent-ort2-1.xx&oh=7654aab7735f0678184f470cf86fd574&oe=61D2E97D",
"https://scontent-ort2-1.xx.fbcdn.net/v/t1.18169-9/149704_10150690955491850_1640271750_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=MYGIaUBlq6QAX-NjvMU&_nc_ht=scontent-ort2-1.xx&oh=fcc86d6cded287e30d936f960e81823e&oe=61D08BE6",
"https://www.gayot.com/images/reviews/sluggers.jpg",

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
          onPress={() => Linking.openURL('https://www.instagram.com/sluggersbar/')} >
          <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('../img/instagram.png')} />
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/SluggersBar/')} >
          <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('../img/facebook.png')} />
          </Pressable> 
    </View>


<View style = {styles.container3}>
<Pressable 
          onPress={() => Linking.openURL('http://www.sluggersbar.com')} >
    <Image
          style = {{width: 375, height: 100, left: 10, marginTop: 70}}
          source = {require('../img/sluggersLogo.png')} />
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
            {"\n"}
            {barDays[2]} -
            {"\n"}{barDays[3]} 
            </Text>
            <Text style = {styles.barTimes} >
              {"\n"} 11AM - 11PM 
            </Text>
  </View>

  

  
  </View>

  </ScrollView> 
  
  </View>


        );
}
}

export default Sluggers;