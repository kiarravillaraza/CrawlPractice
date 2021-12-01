import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { BackgroundCarousel } from './BackgroundCarousel';

var barName = "The Dime";
var barLocation = "2263 N Lincoln Ave, Chicago, IL 60614";
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

        container1: {
          flex: 1,
          backgroundColor: '219EBC'
        },
        containter2 :{
          flex: 1, 
          backgroundColor: 'black'
        }
});
class Dime extends React.Component {

    render () {
        return (
  
  <View style = {styles.container}>
    <View style = {styles.container1}>
      <Text>
      <Text style = {styles.barTitle}>
        {barName}
      </Text>
            <Text style = {styles.barAddress} >
                {"\n"}{barLocation}
            </Text>
            {"\n"}
      </Text>
    </View>
<View style = {styles.containter2}>
<Text style = {styles.barHours}>
            {"\n"} HOURS
          </Text>
            <Text style = {styles.barDays} >
                THURSDAY
            </Text>
            <Text style = {styles.barAddress} >
              {"\n"} 5PM - 2AM 
            </Text>
            <Text style = {styles.barDays} >
                {"\n"} FRIDAY
            </Text>
            <Text style = {styles.barAddress} >
              {"\n"} 5PM - 2AM
              </Text>
            <Text style = {styles.barDays} >
                {"\n"} SATURDAY
            </Text>
            <Text style = {styles.barAddress} >
            {"\n"}11AM - 3AM
            </Text>
            <Text style = {styles.barDays} >
              {"\n"} SUNDAY 
              </Text>
            <Text style = {styles.barAddress} >
            {"\n"}11AM - 6PM
            </Text>

  </View>
  </View>


        );
}
}

export default Dime;
