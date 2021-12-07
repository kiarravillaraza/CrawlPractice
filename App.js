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


 const Stack = createNativeStackNavigator();
 const neighborhoods = [
   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/78566939_158829685503480_2064189259874566144_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SGMX0In75jAAX-Z2BOl&_nc_ht=scontent-ort2-1.xx&oh=fc51a9b7d411ede02af6349b199f4328&oe=61C38364",
   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/201156058_572739830779128_5055751502644027532_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=2c4854&_nc_ohc=fvAoMqkJHekAX9oWPTo&_nc_ht=scontent-ort2-1.xx&oh=102a04e145e82d4fcd5bf2f42ac8a91f&oe=61C1CD88",
   "https://d1t295ks1d26ah.cloudfront.net/media/pictures/files/000/021/263/xlarge_desktop/77394087_158830698836712_6283762755795156992_o.jpg?1589578908",

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
        onPress={() => Alert.alert("Sorry! \n Please come back and visit us when you're 21!")}
      />
      <Button
        color= 'white'
        title="YES"
        onPress={() => navigation.navigate('NeighborhoodList')}
      />
      </View>
    </View>
  );
 }

 
//  function quizScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>On which day will this Bar Crawl take place?</Text>
//       <Button
//         title="Friday"
//         onPress={() => navigation.navigate('Friday')}
//       />
//       <Button
//         title="Saturday"
//         onPress={() => navigation.navigate('Saturday')}
//       />
//       <Button
//         title="Sunday"
//         onPress={() => navigation.navigate('Sunday')}
//       />
//       </View>
//   );
// }
// function fridayScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>How many long will this crawl be for?</Text>
//       <Button
//         title="1 hour"
//         onPress={() => navigation.navigate('1 Hour')}
//       />
//       <Button
//         title="2 hours"
//         onPress={() => navigation.navigate('2 Hours')}
//       />
//       <Button
//         title="3 hours"
//         onPress={() => navigation.navigate('3 Hours')}
//       />
//       </View>
//   );
// }
// function saturdayScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>How many long will this crawl be for?</Text>
//       <Button
//         title="1 hour"
//         onPress={() => navigation.navigate('1 Hour')}
//       />
//       <Button
//         title="2 hours"
//         onPress={() => navigation.navigate('2 Hours')}
//       />
//       <Button
//         title="3 hours"
//         onPress={() => navigation.navigate('3 Hours')}
//       />
//       </View>
//   );
// }
// function sundayScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>How many long will this crawl be for?</Text>
//       <Button
//         title="1 hour"
//         onPress={() => navigation.navigate('1 Hour')}
//       />
//       <Button
//         title="2 hours"
//         onPress={() => navigation.navigate('2 Hours')}
//       />
//       <Button
//         title="3 hours"
//         onPress={() => navigation.navigate('3 Hours')}
//       />
//       </View>
//   );
// }
// function onehourScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Select your neighborhoods?</Text>
//       <Button
//         title="Lincoln Park"
//         onPress={() => count =+ 1}
//       />
//       <Button
//         title="Oldtown"
//         onPress={() => count2 =+ 1}
//       />
//       <Button
//         title="Wrigleyville"
//         onPress={() => count3 =+ 1}
//       />
//       <Button
//         title="Next"
//         onPress={() => navigation.navigate('Bar Count')}
//       />
//       </View>
//   );
// }
// function twohoursScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Select your neighborhoods?</Text>
//       <Button
//         title="Lincoln Park"
//         onPress={() => count =+ 1}
//       />
//       <Button
//         title="Oldtown"
//         onPress={() => count2 =+ 1}
//       />
//       <Button
//         title="Wrigleyville"
//         onPress={() => count3 =+ 1}
//       />
//       <Button
//         title="Next"
//         onPress={() => navigation.navigate('Bar Count')}
//       />
//       </View>
//   );
// }
// function threehoursScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Select your neighborhoods?</Text>
//       <Button
//         title="Lincoln Park"
//         onPress={() => count =+ 1}
//       />
//       <Button
//         title="Oldtown"
//         onPress={() => count2 =+ 1}
//       />
//       <Button
//         title="Wrigleyville"
//         onPress={() => count3 =+ 1}
//       />
//       <Button
//         title="Next"
//         onPress={() => navigation.navigate('Bar Count')}
//       />
//       </View>
//   );
// }
// function barcountScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>How many bars will this crawl have?</Text>
//       <Button
//         title="3"
//         onPress={() => navigation.navigate('3 Bars') }
//       />
//       <Button
//         title="6"
//         onPress={() => navigation.navigate('6 Bars')}
//       />
//       <Button
//         title="9"
//         onPress={() => navigation.navigate('9 Bars')}
//       />
//       </View>
//   );
// }
// function barScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Select your Bars</Text>
//       <Button
//         title="Dime"
//         onPress={() => count =+ 1}
//       />
//       <Button
//         title="Halligan"
//         onPress={() => count2 =+ 1}
//       />
//       <Button
//         title="Replay"
//         onPress={() => count3 =+ 1}
//       />
//       <Button
//         title="Federales"
//         onPress={() => count4 =+ 1}
//       />
//       <Button
//         title="Old Town Pour House"
//         onPress={() => count5 =+ 1}
//       />
//       <Button
//         title="Utopian Tailgate"
//         onPress={() => count6 =+ 1}
//       />
//       <Button
//         title="Guthries Tavern"
//         onPress={() => count7 =+ 1}
//       />
//       <Button
//         title="Happy Camper"
//         onPress={() => count8 =+ 1}
//       />
//       <Button
//         title="Sluggers"
//         onPress={() => count9 =+ 1}
//       />
//       <Button
//         title="Finish"
//         onPress={() => navigation.navigate('Results')}
//       />
//     </View>
//   );
// }
// function resultScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Results:</Text>
//       <Text></Text>
//       <Button
//         title="Go to Neighborhoods"
//         onPress={() => navigation.navigate('NeighborhoodList')}
//       />
//     </View>
//   );
// }
 


 function NeighborhoodScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BackgroundCarousel images={neighborhoods} />

      <View style = {{width: '85%', height: '8%', backgroundColor: '#81d9aa', marginTop: 385}}>
      <Pressable
      onPress={() => navigation.navigate('Lincoln Park')}>
        <Text style = {{fontFamily: 'Futura', fontSize: 35, left: 15, marginTop: 5}}>
        Go to Lincoln Park
        </Text>
      </Pressable>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#81d9aa', marginTop: 50}}>
      <Pressable
      onPress={() => navigation.navigate('Wrigleyville')}>
        <Text style = {{fontFamily: 'Futura', fontSize: 35, left: 15, marginTop: 5}}>
        Go to Wrigleyville
        </Text>
      </Pressable>
      </View>

      <View style = {{width: '85%', height: '8%', backgroundColor: '#81d9aa', marginTop: 50}}>
      <Pressable
      onPress={() => navigation.navigate('Old Town')}>
        <Text style = {{fontFamily: 'Futura', fontSize: 35, left: 35, marginTop: 5}}>
        Go to Old Town
        </Text>
      </Pressable>
      </View>

      <View style = {{width: '100%', height: '18%', backgroundColor: '#81d9aa', marginTop:50}}> 
          <Pressable 
          onPress={() => navigation.navigate('Wrigleyville')}>
          {/* <Image
          style = {{width: 130, height: 130, left: 55, marginTop: 0}}
          source = {require('./src/img/instagram.png')} /> */}
          </Pressable>

          <Pressable 
          onPress={() => Linking.openURL('https://www.facebook.com/thedimechi/')} >
          {/* <Image
          style = {{width: 65, height: 65, left: 105, marginTop:30}}
          source = {require('./src/img/facebook.png')} /> */}
          </Pressable> 
    </View>


    </View>
  );
}

function LincolnParkScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*<LincolnPark />*/}
      <Text>Lincoln Park Screen</Text>
      <Button
        title="Go to Dime"
        onPress={() => navigation.navigate('The Dime')}
      />
      <Button
        title="Go to Halligan"
        onPress={() => navigation.navigate('Halligan Bar')}
      />
      <Button
        title="Go to Replay"
        onPress={() => navigation.navigate('Replay')}
      />
    </View>
  );
}

function OldTownScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*<OldTown />*/}
      <Text>Old Town Screen</Text>
      <Button
        title="Go to Federales"
        onPress={() => navigation.navigate('Federales')}
      />
      <Button
        title="Go to Old Town Pour House"
        onPress={() => navigation.navigate('Old Town Pour House')}
      />
      <Button
        title="Go to Utopian Tailgate"
        onPress={() => navigation.navigate('Utopian Tailgate')}
      />
    </View>
  );
}

function WrigleyvilleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*<Wrigleyville />*/}
      <Text>Wrigleyville Screen</Text>
      <Button
        title="Go to Guthries Tavern"
        onPress={() => navigation.navigate('Guthries Tavern')}
      />
      <Button
        title="Go to Happy Camper"
        onPress={() => navigation.navigate('Happy Camper')}
      />
      <Button
        title="Go to Sluggers"
        onPress={() => navigation.navigate('Sluggers World Class Sports Bar')}
      />
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
      <Stack.Navigator initialRouteName="Warning">
        <Stack.Screen
          name="Warning"
          component={WarningScreen}
        />
        {/* <Stack.Screen
          name="Quiz"
          component={quizScreen}
        />
        <Stack.Screen
          name="Friday"
          component={fridayScreen}
        />
        <Stack.Screen
          name="Saturday"
          component={saturdayScreen}
        />
        <Stack.Screen
          name="Sunday"
          component={sundayScreen}
        />
        <Stack.Screen
          name="1 Hour"
          component={onehourScreen}
        />
        <Stack.Screen
          name="2 Hours"
          component={twohoursScreen}
        />
        <Stack.Screen
          name="3 Hours"
          component={threehoursScreen}
        />
        <Stack.Screen
          name="3 Bars"
          component={barScreen}
        />
        <Stack.Screen
          name="6 Bars"
          component={barScreen}
          
        />
        <Stack.Screen
          name="9 Bars"
          component={barScreen}
        />
        <Stack.Screen
          name="Bar Count"
          component={barcountScreen}
        />
        <Stack.Screen
          name="Bars"
          component={barScreen}
        />
        <Stack.Screen
          name="Results"
          component={resultScreen}
        /> */}

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
  // bottomBar: {
  //   marginTop: 70,
  //   width: '100%',
  //   height: '46%',
  //   flexDirection: 'row',
  //   backgroundColor: '#81d9aa'

  // },

  
  
});


export default App;
