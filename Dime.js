import {StyleSheet, Text} from 'react-native';
import React from 'react';

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
        }
});
class Dime extends React.Component {

    render () {
        return (
    <Text style = {styles.barTitle}>
      The Dime
      <Text style = {styles.barAddress} >
          {"\n"}2263 N Lincoln Ave, Chicago, IL 60614
      </Text>
      {"\n"}
      <Text style = {styles.barHours}>
        {"\n"} HOURS
      </Text>
      <Text style = {styles.barDays} >
          {"\n"} THURSDAY
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
    </Text>
    
        );
}
}

export default Dime;
