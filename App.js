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


 const Stack = createNativeStackNavigator(); // stack navigation 

// Structure to add image carousels to screen
 
 const neighborhoods = [
   
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/3-chicago-skyline-fraser-hall.jpg",
  "https://newschannel20.com/resources/media/7ef030da-ecf0-47a1-a027-df5f22b0aeb0-large16x9_chicago201734.jpg?1562074403956",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Chicago%2C_Illinois.svg/1200px-Flag_of_Chicago%2C_Illinois.svg.png",
  "https://www.fodors.com/wp-content/uploads/2019/05/WhatNOTtodoinChicago__HERO_iStock-996188444.jpg",
  "https://gray-wmtv-prod.cdn.arcpublishing.com/resizer/7la4V77HAeKlhtRWRlzI1UCpMdw=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/GKELIZ2BIJBUJJU6OT6PCBB3EQ.jpg",
  "https://images.squarespace-cdn.com/content/v1/5348b041e4b05d350c6d7c21/1575108423959-FCOJFUP28KLB1XBB8QA2/NightSkyline2015_Squarespace.jpg?format=1000w",


 ];


 const lincolnpark = [
    "https://2jrsul422l1h30k2za1f5dcc-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/Lincoln-Park_Armitage-1920x1080.jpg",
    "https://www.gpsmycity.com/img/ctw/308.jpg",
    "https://neighborhood-images.s3.wasabisys.com/lincoln-park/lincoln-park-neighborhood-32.jpg",
  
];


const wrigleyville = [
   "https://cdn.choosechicago.com/uploads/2019/05/wrigleyville-1.jpg",
   "https://assets.dnainfo.com/photo/2017/10/1507314723-311378/extralarge.jpg",
   "https://www.bealproperties.com/wp-content/uploads/2018/07/wrigleyville-large-1.jpg",


];


const oldtown = [
  "https://www.hotspotrentals.com/wp-content/uploads/2020/05/Old-Town-Chicago-Neighborhood-Historic-Street-1024x677.jpg",
  "https://www.hotspotrentals.com/wp-content/uploads/2020/05/Old-Town-Ale-House-1024x768.jpg",
  "https://www.luxurychicagoapartments.com/wp-content/uploads/2017/08/IMG_6736.jpg",
 
];

// Navigation screens that the user sees for each component in the app

//This is the warning screen

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
  
//This is the neighborhoods home screem

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

      {/*Bottom bar Navigation that has home icon, generate icon, and quiz icon*/}
      
      <View style = {styles.bottomBar}> 
      <Pressable 
      onPress={() => {navigation.navigate('NeighborhoodList')}}>
      <Image
      style = {{width: 65, height: 65, left: 30, marginTop: 5}}
      source = {require('./src/img/homeIcon.png')} />
      </Pressable>

      <Pressable 
      onPress={() => {navigation.navigate('Generate')}}>
      <Image
      style = {{width: 60, height: 60, left: 105, marginTop:10}}
      source = {require('./src/img/generateIcon.png')} />
      </Pressable> 
      
      <Image
      style = {{width: 50, height: 50, left: 185, marginTop:10}}
      source = {require('./src/img/quizIcon.png')} />
      </View>
    </View>
  ); 
}

// This is one of the neighborhood screens
function LincolnParkScreen({ navigation }) {
  return (
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
      onPress={() => {navigation.navigate('Generate')}}>
      <Image
      style = {{width: 60, height: 60, left: 105, marginTop:10}}
      source = {require('./src/img/generateIcon.png')} />
      </Pressable> 
      
      <Image
      style = {{width: 50, height: 50, left: 185, marginTop:10}}
      source = {require('./src/img/quizIcon.png')} />
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
      onPress={() => {navigation.navigate('Generate')}}>
      <Image
      style = {{width: 60, height: 60, left: 105, marginTop:10}}
      source = {require('./src/img/generateIcon.png')} />
      </Pressable> 
      
      <Image
      style = {{width: 50, height: 50, left: 185, marginTop:10}}
      source = {require('./src/img/quizIcon.png')} />
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
      onPress={() => {navigation.navigate('Generate')}}>
      <Image
      style = {{width: 60, height: 60, left: 105, marginTop:10}}
      source = {require('./src/img/generateIcon.png')} />
      </Pressable> 
      
      <Image
      style = {{width: 50, height: 50, left: 185, marginTop:10}}
      source = {require('./src/img/quizIcon.png')} />
      </View>
 </View>
  );
}

// Generate function to randomly choose bars for the users to use
function GenerateScreen({ navigation }) {
  var myArray = [
    "The Dime",
    "Halligan Bar",
    "Sluggers",
    "Replay",
    "Utopian Tailgate",
    "Guthries Tavern",
    "Federales",
    "Happy Camper",
    "Old Town Pour House"
  ];
   
  var duplicateItem = []; // create empty array to store result after removing duplicates
   
  for (let i = 0; i < 100; i++) {
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
    if (!duplicateItem.includes(randomItem)) { // if random item not in duplicateItem array
        if(duplicateItem.length != 5){ // and also duplicateItem array isn't filled
        duplicateItem.push(randomItem) // then push item into duplicateItem
        }
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 35, textAlign: 'center', fontStyle: 'italic', marginTop: 255}}>
          LET'S GET CRAWLIN'
        </Text>
      <View style = {{width:'85%', height: '9.75%', backgroundColor: '#C8D586', marginLeft: -60, marginTop: 30}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 30, textAlign: 'center', marginTop: 15}}>
          {duplicateItem[0]}
        </Text>
      </View>
  
      <View style = {{width: '85%', height: '9.75%', backgroundColor: '#87E120', marginLeft: 60, marginTop: 40}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 30, textAlign: 'center', marginTop: 15}}>
          {duplicateItem[1]}
        </Text>
      </View>

      <View style = {{width: '85%', height: '9.75%', backgroundColor: '#81D9AA', marginLeft: -60, marginTop: 40}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 30, textAlign: 'center', marginTop: 15}}>
          {duplicateItem[2]}
        </Text>
      </View>

      <View style = {{width: '85%', height: '9.75%', backgroundColor: '#01BBCC', marginLeft: 60, marginTop: 40}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 30, textAlign: 'center', marginTop: 15}}>
          {duplicateItem[3]}
        </Text>
      </View>

      <View style = {{width: '85%', height: '9.75%', backgroundColor: '#219EBC', marginLeft: -60, marginTop: 40}}>
        <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 30, textAlign: 'center', marginTop: 15}}>
          {duplicateItem[4]}
        </Text>
      </View>

      <View style = {{flexDirection: 'row', width: '100%', height: '18%', backgroundColor: '#023047', marginTop:180}}> 
         <Pressable 
         onPress={() => {navigation.navigate('NeighborhoodList')}}>
         <Image
         style = {{width: 65, height: 65, left: 30, marginTop: 5}}
         source = {require('./src/img/homeIcon.png')} />
         </Pressable>

         <Pressable 
         onPress={() => {navigation.navigate('Generate')}}>
         <Image
         style = {{width: 60, height: 60, left: 105, marginTop:10}}
         source = {require('./src/img/generateIcon.png')} />
         </Pressable> 

         <Image
         style = {{width: 50, height: 50, left: 185, marginTop:10}}
         source = {require('./src/img/quizIcon.png')} />
        </View>
    </View>
  );
}


//Individual bars screens

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

// Our app is built off stack navigation and stack screens

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

//Styling

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