/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 //import React, { Component } from "react";
 import * as React from 'react';
 import { Platform, Button, SafeAreaView, Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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


 const Stack = createNativeStackNavigator();


 function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to OldTown"
        onPress={() => navigation.navigate('OldTown')}
      />
      <Button
        title="Go to Sluggers"
        onPress={() => navigation.navigate('Sluggers')}
      />
      <Button
        title="Go to Halligan"
        onPress={() => navigation.navigate('Halligan')}
      />
    </View>
  );
}

function DetailsWithinDetailsScreen() {
  /*const onPressHandler = () => {
    navigation.goBack();
  }*/

  return (
    <View style={styles.container}>
            <OldTownPourHouse />
    </View>
  );
}

function DetailsWithinScreen() {
  return (
    <View style={styles.container}>
            <Sluggers />
    </View>
  );
}

function WithinDetailsScreen() {
  return (
    <View style={styles.container}>
            <Halligan />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Neighborhoods Overview' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen 
          name="OldTown" 
          component={DetailsWithinDetailsScreen}
        />
        <Stack.Screen name="Sluggers" component={DetailsWithinScreen} />
        <Stack.Screen name="Halligan" component={WithinDetailsScreen} />
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
  }
});


export default App;