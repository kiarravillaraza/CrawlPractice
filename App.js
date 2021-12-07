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
 import Dime from "./Dime";
 import Federales from "./Federales";
 import GuthriesTavern from "./GuthriesTavern";
 import Halligan from "./Halligan";
 import HappyCamper from "./HappyCamper";
 import OldTownPourHouse from "./OldTownPourHouse";
 import Replay from "./Replay";
 import Sluggers from "./Sluggers";
 import UtopianTailgate from "./UtopianTailgate";
 import LincolnPark from './LincolnPark';
 import OldTown from './OldTown';
 import Wrigleyville from './Wrigleyville';


 const Stack = createNativeStackNavigator();

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


 function NeighborhoodScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Neighborhood List</Text>
      <Button
        title="Go to Lincoln Park"
        onPress={() => navigation.navigate('Lincoln Park')}
      />

      <Button
        title="Go to Old Town"
        onPress={() => navigation.navigate('Old Town')}
      />

      <Button
        title="Go to Wrigleyville"
        onPress={() => navigation.navigate('Wrigleyville')}
      />
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
  
});


export default App;