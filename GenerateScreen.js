import * as React from 'react';
import { Platform, Button, SafeAreaView, Alert, Image, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';

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

// function GenerateScreen() {
//   return (
//     <View>
//       <View style={styles.container}>
//         <Text style = {styles.duplicateItem} >
//         {duplicateItem[0]}
//         </Text>
//       </View>

//       <View style = {styles.bottomBar}> 
//       <Pressable 
//       onPress={() => {navigation.navigate('NeighborhoodList')}}>
//       <Image
//       style = {{width: 65, height: 65, left: 30, marginTop: 5}}
//       source = {require('./src/img/homeIcon.png')} />
//       </Pressable>

//       <Pressable 
//       onPress={() => {navigation.navigate('NeighborhoodList')}}>
//       <Image
//       style = {{width: 60, height: 60, left: 105, marginTop:10}}
//       source = {require('./src/img/generateIcon.png')} />
//       </Pressable> 

//       <Pressable 
//       onPress={() => {navigation.navigate('NeighborhoodList')}}>
//       <Image
//       style = {{width: 50, height: 50, left: 185, marginTop:10}}
//       source = {require('./src/img/quizIcon.png')} />
//       </Pressable> 
//       </View>

//     </View>
//   );
// }

class Generate extends React.Component {
    render () {
        return (
        <View>
            <View>
                <Text style={{color:'white'}}>
                    {duplicateItem[0]}
                </Text>
            </View>

            <View>
                <Text style={{color:'white'}}>
                    {duplicateItem[1]}
                </Text>
            </View>

            <View>
                <Text style={{color:'white'}}>
                    {duplicateItem[2]}
                </Text>
            </View>
        </View>
        );
    }
}

export default Generate