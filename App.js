/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 //import React, { Component } from "react";
 import * as React from 'react';
 import { Platform, Button, SafeAreaView, Alert, Image, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import {BackgroundCarousel} from './BackgroundCarousel'
 import Dime from "./src/bars/Dime";
 import Federales from "./src/bars/Federales";
 import GuthriesTavern from "./src/bars/GuthriesTavern";
 import Halligan from "./src/bars/Halligan";
 import HappyCamper from "./src/bars/HappyCamper";
 import OldTownPourHouse from "./src/bars/OldTownPourHouse";
 import Replay from "./src/bars/Replay";
 import Sluggers from "./src/bars/Sluggers";
 import UtopianTailgate from "./src/bars/UtopianTailgate";
 import LincolnPark from './src/neighborhoods/LincolnPark';
 import OldTown from './src/neighborhoods/OldTown';
 import Wrigleyville from './src/neighborhoods/Wrigleyville';
 //import Generate from './GenerateScreen';


 const Stack = createNativeStackNavigator();
 const neighborhoods = [
  "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/78566939_158829685503480_2064189259874566144_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SGMX0In75jAAX-Z2BOl&_nc_ht=scontent-ort2-1.xx&oh=fc51a9b7d411ede02af6349b199f4328&oe=61C38364",
  "https://scontent-ort2-1.xx.fbcdn.net/v/t31.18172-8/1265409_597327190308488_1288255192_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Nt7rxpnv5wsAX8L7CIt&_nc_ht=scontent-ort2-1.xx&oh=3086fa8ff888d036c75969e99b3602cf&oe=61D11DEB",
  "https://www.chicagotribune.com/resizer/9zBitcXuYWji-eyuvl9O0bJV160=/800x533/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/5LVIDUNDMFHB5A4S22LMPKAOPQ.jpg",
  "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1295286/20130726-DSC_6093_cybe1v.jpg",
  "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/101299524_899946000522059_7547170047823708160_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=9267fe&_nc_ohc=X5rNbnK7eJ8AX90vtmO&tn=tPdjh7UKYw6oFUL6&_nc_ht=scontent-ort2-1.xx&oh=0be6e9bc70f8bcb65f5cc0c760f5a311&oe=61D011AE",
  "https://hhrevolution.com/wp-content/uploads/2019/07/Federales-2-580x400.jpeg",

 ];

 const lincolnpark = [
  "https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/256827177_675290333857410_1923687880662733746_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=ueUP4HlqjO0AX9wdCoa&_nc_oc=AQkzcCYRokkwa04BhASNjrCxlMcvKLFS7O3FiEvx0Y0uX3EE368A059GsF015spKmHM&_nc_ht=scontent-ort2-1.xx&oh=74040c1c6c7234a009dd0d018a61fc63&oe=61B43A62",
  "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/76702461_2791448444209752_8930288386313289728_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=mg0AsBtx1-oAX9gVtMR&_nc_ht=scontent-ort2-1.xx&oh=398b5993fdec522a79158cfb90db1bad&oe=61D0F32B",
  "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/75486107_3388615897846256_7169672044894748672_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=9267fe&_nc_ohc=vLV1E9nWinIAX-Jh9ca&_nc_ht=scontent-ort2-1.xx&oh=f636be04edc297e3b02d85857de9db15&oe=61CED8AE",

];

const wrigleyville = [
  "https://cdn.vox-cdn.com/thumbor/IC1H11puuwCPO9SXnOcp0EGehkE=/0x0:1904x1141/1520x1013/filters:focal(621x127:925x431):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67086133/s.0.png",
  "https://images.otstatic.com/prod/28117442/2/huge.jpg",
  "https://www.gayot.com/images/reviews/sluggers.jpg",


];


const oldtown = [
  "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/186564204_1151988261984497_4821527613847711828_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=9267fe&_nc_ohc=un3NJn2zzlcAX9mcyVo&_nc_ht=scontent-ort2-1.xx&oh=3a5de757399e1b52b4c1a50d73832d3b&oe=61D23303",
  "https://img1.10bestmedia.com/Images/Photos/371169/20120314--DSC0625_55_660x440.jpg",
  "https://popmenucloud.com/anfshomu/cee25714-1b47-47dd-b4f9-7dc41811578f.jpg",
];

 function WarningScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <Text style ={{marginTop: -20, left: 0, fontSize: 45, fontFamily: "Futura", fontStyle: "italic", fontWeight: "bold", color: 'white'}}>
        LET'S
        {"\n"}
      </Text>
       <Image
          style = {{width: 300, height: 300, left: -10, marginTop: -50}}
          source = {require('./src/img/CrawlLogo.png')} />
      <Text style ={{marginTop: -5, left: 0, fontSize: 55, fontFamily: "Futura", fontStyle: "italic", fontWeight: "bold", color: 'white'}}>
      CRAWL
        {"\n"}
      </Text>
       <View style={{width: 300, height:100, left: 0, marginTop: -30,backgroundColor: 'white'}}>
       <Text style ={{marginTop: 30, left: 30, fontSize: 25, fontFamily: "Futura", fontStyle: "italic", fontWeight: "bold", color: 'black'}}>
        ARE YOU OVER 21?
        {"\n"}
      </Text>
      </View>
      <View style ={styles.warningButtons}>
      <Button 
        color= 'white'
        title="NO"
        onPress={() => Alert.alert("SORRY! \n Please come back and visit us when you're 21!")}
      />
      <Button
        color= 'white'
        title="YES"
        onPress={() => navigation.navigate('NeighborhoodList')}
      />
      </View>

      <View style = {{marginTop: 10}}>
        <Text style = {{fontSize: 8, color: '#ededed', marginTop: 15}}>
        *YOU MUST BE OF LEGAL DRINKING AGE IN YOUR RESPECTIVE COUNTRY FOR ENTRY*
        </Text>
      </View>
    </View>
  );
 }


 function NeighborhoodScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <BackgroundCarousel images={neighborhoods} />

      <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 385}}>
      <Pressable
      onPress={() => navigation.navigate('Lincoln Park')}>
        <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 35, left: 65, marginTop: 5}}>
        Lincoln Park
        </Text>
      </Pressable>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
      <Pressable
      onPress={() => navigation.navigate('Wrigleyville')}>
        <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 35, left: 65, marginTop: 5}}>
        Wrigleyville
        </Text>
      </Pressable>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
      <Pressable
      onPress={() => navigation.navigate('Old Town')}>
        <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 35, left: 85, marginTop: 5}}>
        Old Town
        </Text>
      </Pressable>
      </View>

      <View style = {styles.bottomBar}> 
        <Pressable 
        onPress={() => {navigation.navigate('NeighborhoodList')}}>
        <Image
        style = {{width: 65, height: 65, left: 30, marginTop: 5}}
        source = {require('./src/img/homeIcon.png')} />
        </Pressable>

        <Pressable 
        onPress={() => {navigation.navigate('NeighborhoodList')}}>
        <Image
        style = {{width: 60, height: 60, left: 105, marginTop:10}}
        source = {require('./src/img/generateIcon.png')} />
        </Pressable> 
        
        <Pressable 
        onPress={() => {navigation.navigate('Generate')}}>
        <Image
        style = {{width: 50, height: 50, left: 185, marginTop:10}}
        source = {require('./src/img/quizIcon.png')} />
        </Pressable> 
        </View>

    </View>
  );
}

function LincolnParkScreen({ navigation }) {
  return (
    // <LincolnPark />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
    <BackgroundCarousel images={lincolnpark} />

    <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 385}}>
    <Pressable
    onPress={() => navigation.navigate('The Dime')}>
      <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 35, left: 90, marginTop: 5}}>
      The Dime
      </Text>
    </Pressable>
    </View>

    <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
    <Pressable
    onPress={() => navigation.navigate('Replay')}>
      <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 35, left: 110, marginTop: 5}}>
      Replay 
      </Text>
    </Pressable>
    </View>

    <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
    <Pressable
    onPress={() => navigation.navigate('Halligan Bar')}>
      <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 35, left: 65, marginTop: 5}}>
      Halligan Bar
      </Text>
    </Pressable>
    </View>

    <View style = {styles.bottomBar}> 
        <Pressable 
        onPress={() => {navigation.navigate('NeighborhoodList')}}>
        <Image
        style = {{width: 65, height: 65, left: 30, marginTop: 5}}
        source = {require('./src/img/homeIcon.png')} />
        </Pressable>

        <Pressable 
        onPress={() => {navigation.navigate('NeighborhoodList')}}>
        <Image
        style = {{width: 60, height: 60, left: 105, marginTop:10}}
        source = {require('./src/img/generateIcon.png')} />
        </Pressable> 
        
        <Pressable 
        onPress={() => {navigation.navigate('Generate')}}>
        <Image
        style = {{width: 50, height: 50, left: 185, marginTop:10}}
        source = {require('./src/img/quizIcon.png')} />
        </Pressable> 
      </View>


  </View>
    
  );
}

function OldTownScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
    <BackgroundCarousel images={oldtown} />

    <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 385}}>
    <Pressable
    onPress={() => navigation.navigate('Utopian Tailgate')}>
      <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 35, left: 35, marginTop: 5}}>
       Utopian Tailgate
      </Text>
    </Pressable>
    </View>

    <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
    <Pressable
    onPress={() => navigation.navigate('Old Town Pour House')}>
      <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 31, left: 11, marginTop: 7}}>
      Old Town Pour House
      </Text>
    </Pressable>
    </View>

    <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
    <Pressable
    onPress={() => navigation.navigate('Federales')}>
      <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 35, left: 85, marginTop: 5}}>
       Federales
      </Text>
    </Pressable>
    </View>

    <View style = {styles.bottomBar}> 
      <Pressable 
      onPress={() => {navigation.navigate('NeighborhoodList')}}>
      <Image
      style = {{width: 65, height: 65, left: 30, marginTop: 5}}
      source = {require('./src/img/homeIcon.png')} />
      </Pressable>

      <Pressable 
      onPress={() => {navigation.navigate('NeighborhoodList')}}>
      <Image
      style = {{width: 60, height: 60, left: 105, marginTop:10}}
      source = {require('./src/img/generateIcon.png')} />
      </Pressable> 
      
      <Pressable 
      onPress={() => {navigation.navigate('Generate')}}>
      <Image
      style = {{width: 50, height: 50, left: 185, marginTop:10}}
      source = {require('./src/img/quizIcon.png')} />
      </Pressable> 
      </View>

  </View>
  );
}

function WrigleyvilleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <BackgroundCarousel images={wrigleyville} />

      <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 385}}>
      <Pressable
      onPress={() => navigation.navigate('Guthries Tavern')}>
        <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 35, left: 35, marginTop: 5}}>
        Guthries Tavern
        </Text>
      </Pressable>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
      <Pressable
      onPress={() => navigation.navigate('Happy Camper')}>
        <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 35, left: 40, marginTop: 5}}>
        Happy Camper
        </Text>
      </Pressable>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
      <Pressable
      onPress={() => navigation.navigate('Sluggers World Class Sports Bar')}>
        <Text style = {{fontFamily: 'Futura', color: 'white', fontSize: 35, left: 90, marginTop: 5}}>
        Sluggers
        </Text>
      </Pressable>
      </View>

      <View style = {styles.bottomBar}> 
        <Pressable 
        onPress={() => {navigation.navigate('NeighborhoodList')}}>
        <Image
        style = {{width: 65, height: 65, left: 30, marginTop: 5}}
        source = {require('./src/img/homeIcon.png')} />
        </Pressable>

        <Pressable 
        onPress={() => {navigation.navigate('NeighborhoodList')}}>
        <Image
        style = {{width: 60, height: 60, left: 105, marginTop:10}}
        source = {require('./src/img/generateIcon.png')} />
        </Pressable> 
        
        <Pressable 
        onPress={() => {navigation.navigate('Generate')}}>
        <Image
        style = {{width: 50, height: 50, left: 185, marginTop:10}}
        source = {require('./src/img/quizIcon.png')} />
        </Pressable> 
        </View>

    </View>
  );
}


function GenerateScreen({ navigation }) {
  var myArray = [
    "The Dime",
    "Halligan Bar",
    "Sluggers World Class Sports Bar",
    "Replay",
    "Utopian Tailgate",
    "Guthries Tavern",
    "Federales",
    "Happy Camper",
    "Old Town Pour House"
  ];
   
  var duplicateItem = [];
   
  for (let i = 0; i < 100; i++) {
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
    if (!duplicateItem.includes(randomItem)) {
        if(duplicateItem.length != 5){
        duplicateItem.push(randomItem)
        }
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>

  
      <View style = {{width:'85%', height: '8%', backgroundColor: '#C8D586', marginLeft: -60, marginTop: 165}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 25, textAlign: 'center', marginTop: 10}}>
          {duplicateItem[0]}
        </Text>
      </View>
  
      <View style = {{width: '85%', height: '8%', backgroundColor: '#A5E568', marginLeft: 60, marginTop: 50}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 25, textAlign: 'center', marginTop: 10}}>
          {duplicateItem[1]}
        </Text>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#81D9AA', marginLeft: -60, marginTop: 50}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 25, textAlign: 'center', marginTop: 10}}>
          {duplicateItem[2]}
        </Text>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#01BBCC', marginLeft: 60, marginTop: 50}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 25, textAlign: 'center', marginTop: 10}}>
          {duplicateItem[3]}
        </Text>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#219EBC', marginLeft: -60, marginTop: 50}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 25, textAlign: 'center', marginTop: 10}}>
          {duplicateItem[4]}
        </Text>
      </View>

      <View style = {styles.bottomBar}> 
        <Pressable 
        onPress={() => {navigation.navigate('NeighborhoodList')}}>
        <Image
        style = {{width: 65, height: 65, left: 30, marginTop: 5}}
        source = {require('./src/img/homeIcon.png')} />
        </Pressable>

        <Pressable 
        onPress={() => {navigation.navigate('NeighborhoodList')}}>
        <Image
        style = {{width: 60, height: 60, left: 105, marginTop:10}}
        source = {require('./src/img/generateIcon.png')} />
        </Pressable> 

        <Pressable 
        onPress={() => {navigation.navigate('Generate')}}>
        <Image
        style = {{width: 50, height: 50, left: 185, marginTop:10}}
        source = {require('./src/img/quizIcon.png')} />
        </Pressable> 
      </View>
    </View>
  );
}

function DimeScreen() {
  return (
    <View style={styles.container}>
            <Dime />
    </View>
  );
}

function HalliganScreen() {
  return (
    <View style={styles.container}>
            <Halligan />
    </View>
  );
}

function ReplayScreen() {
  return (
    <View style={styles.container}>
            <Replay />
    </View>
  );
}

function FederalesScreen() {
  return (
    <View style={styles.container}>
            <Federales />
    </View>
  );
}

function OldTownPourHouseScreen() {
  return (
    <View style={styles.container}>
            <OldTownPourHouse />
    </View>
  );
}

function UtopianTailgateScreen() {
  return (
    <View style={styles.container}>
            <UtopianTailgate />
    </View>
  );
}

function GuthriesTavernScreen() {
  return (
    <View style={styles.container}>
            <GuthriesTavern />
    </View>
  );
}

function HappyCamperScreen() {
  return (
    <View style={styles.container}>
            <HappyCamper />
    </View>
  );
}

function SluggersScreen() {
  return (
    <View style={styles.container}>
            <Sluggers />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Terms of Agreement">
        <Stack.Screen
          name="Terms of Agreement"
          component={WarningScreen}
        />


        <Stack.Screen
          name="NeighborhoodList"
          component={NeighborhoodScreen}
          options={{ title: 'Neighborhoods' }}
        />

        <Stack.Screen 
          name="Lincoln Park" 
          component={LincolnParkScreen} 
        />

        <Stack.Screen
          name="Old Town"
          component={OldTownScreen}
        />

        <Stack.Screen
          name="Wrigleyville"
          component={WrigleyvilleScreen}
        />

        <Stack.Screen 
          name="The Dime" 
          component={DimeScreen}
        />

        <Stack.Screen 
          name="Halligan Bar" 
          component={HalliganScreen} 
        />

        <Stack.Screen
          name="Generate"
          component={GenerateScreen}
          options={{ title: 'Your Crawl' }}
        />

        <Stack.Screen 
          name="Replay" 
          component={ReplayScreen} 
        />

        <Stack.Screen 
          name="Federales" 
          component={FederalesScreen}
        />

        <Stack.Screen 
          name="Old Town Pour House" 
          component={OldTownPourHouseScreen} 
        />

        <Stack.Screen 
          name="Utopian Tailgate" 
          component={UtopianTailgateScreen} 
        />

        <Stack.Screen 
          name="Guthries Tavern" 
          component={GuthriesTavernScreen}
        />

        <Stack.Screen 
          name="Happy Camper" 
          component={HappyCamperScreen} 
        />

        <Stack.Screen 
          name="Sluggers World Class Sports Bar" 
          component={SluggersScreen} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'black',
    alignItems: "center",
  },
  welcome: {
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    bottom: 50,
    fontWeight: "bold",
    fontFamily: "Futura",
    letterSpacing: 3.5,
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    fontFamily: "Economica-Bold",
    marginBottom: 5
  },
  warningButtons: {
    flexDirection: 'row',
    marginTop: 25
  },
  bottomBar: {
       flexDirection: 'row',
       width: '100%', 
       height: '18%', 
       backgroundColor: '#023047', 
       marginTop:50
      },
    
});


export default App;
