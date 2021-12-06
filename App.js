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
      <Text>Lincoln Park Screen</Text>
      <Button
        title="Go to Dime"
        onPress={() => navigation.navigate('Dime')}
      />
      <Button
        title="Go to Halligan"
        onPress={() => navigation.navigate('Halligan')}
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
      <Text>Old Town Screen</Text>
      <Button
        title="Go to Federales"
        onPress={() => navigation.navigate('Federales')}
      />
      <Button
        title="Go to Old Town Pour House"
        onPress={() => navigation.navigate('OldTownPourHouse')}
      />
      <Button
        title="Go to Utopian Tailgate"
        onPress={() => navigation.navigate('UtopianTailgate')}
      />
    </View>
  );
}

function WrigleyvilleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Wrigleyville Screen</Text>
      <Button
        title="Go to Guthries Tavern"
        onPress={() => navigation.navigate('GuthriesTavern')}
      />
      <Button
        title="Go to Happy Camper"
        onPress={() => navigation.navigate('HappyCamper')}
      />
      <Button
        title="Go to Sluggers"
        onPress={() => navigation.navigate('Sluggers')}
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
      <Stack.Navigator initialRouteName="NeighborhoodList">
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
          name="Dime" 
          component={DimeScreen}
        />

        <Stack.Screen 
          name="Halligan" 
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
          name="OldTownPourHouse" 
          component={OldTownPourHouseScreen} 
        />

        <Stack.Screen 
          name="UtopianTailgate" 
          component={UtopianTailgateScreen} 
        />

        <Stack.Screen 
          name="GuthriesTavern" 
          component={GuthriesTavernScreen}
        />

        <Stack.Screen 
          name="HappyCamper" 
          component={HappyCamperScreen} 
        />

        <Stack.Screen 
          name="Sluggers" 
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
  }
});


export default App;