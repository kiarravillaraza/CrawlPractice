// import {Platform, StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable, Image, ScrollView, Linking} from 'react-native';
// import React from 'react';
// import { BackgroundCarousel } from '../../BackgroundCarousel';


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: 'black',
//     alignItems: "center",
//   },
//   welcome: {
//     fontSize: 40,
//     color: "#fff",
//     textAlign: "center",
//     bottom: 50,
//     fontWeight: "bold",
//     fontFamily: "Futura",
//     letterSpacing: 3.5,
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     fontFamily: "Economica-Bold",
//     marginBottom: 5
//   },
//   warningButtons: {
//     flexDirection: 'row',
//     marginTop: 25
//   },
//   bottomBar: {
//        flexDirection: 'row',
//        width: '100%', 
//        height: '18%', 
//        backgroundColor: '#023047', 
//        marginTop:50
//       }
    

  
  
// });

// // const dime = [

// //   "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/256827177_675290333857410_1923687880662733746_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=Q2Z2IEDrUfQAX-j6X92&_nc_oc=AQmnx8q1Kd6KunZEIf3cqiSCHiA0jfKVzx6I_AB6FGS8I2RGQ8IFTXzmx4XjY3gDqt4&_nc_ht=scontent-ort2-2.xx&oh=16ca92d1a008904282f7952da82418a6&oe=61AE4BA2",
// //    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/78566939_158829685503480_2064189259874566144_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SGMX0In75jAAX-Z2BOl&_nc_ht=scontent-ort2-1.xx&oh=fc51a9b7d411ede02af6349b199f4328&oe=61C38364",
// //    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/201156058_572739830779128_5055751502644027532_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=2c4854&_nc_ohc=fvAoMqkJHekAX9oWPTo&_nc_ht=scontent-ort2-1.xx&oh=102a04e145e82d4fcd5bf2f42ac8a91f&oe=61C1CD88",
// //    "https://d1t295ks1d26ah.cloudfront.net/media/pictures/files/000/021/263/xlarge_desktop/77394087_158830698836712_6283762755795156992_o.jpg?1589578908",
// //    "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/258091832_676527673733676_8826771448272167123_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=9267fe&_nc_ohc=wtnCrkbFXIUAX_r7oGi&_nc_ht=scontent-ort2-2.xx&oh=b44199efd21a054363d908db1ae80496&oe=61AE39F9",

// //  ];


// const lincolnpark = [
//   "https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/256827177_675290333857410_1923687880662733746_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=ueUP4HlqjO0AX9wdCoa&_nc_oc=AQkzcCYRokkwa04BhASNjrCxlMcvKLFS7O3FiEvx0Y0uX3EE368A059GsF015spKmHM&_nc_ht=scontent-ort2-1.xx&oh=74040c1c6c7234a009dd0d018a61fc63&oe=61B43A62",
//   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/76702461_2791448444209752_8930288386313289728_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=mg0AsBtx1-oAX9gVtMR&_nc_ht=scontent-ort2-1.xx&oh=398b5993fdec522a79158cfb90db1bad&oe=61D0F32B",
//   "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/75486107_3388615897846256_7169672044894748672_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=9267fe&_nc_ohc=vLV1E9nWinIAX-Jh9ca&_nc_ht=scontent-ort2-1.xx&oh=f636be04edc297e3b02d85857de9db15&oe=61CED8AE",

// ];

// class LincolnPark extends React.Component {

//     render () {
//         return (
//           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
//           <BackgroundCarousel images={lincolnpark} />
      
//           <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 385}}>
//           <Pressable
//           onPress={() => navigation.navigate('The Dime')}>
//             <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 35, left: 90, marginTop: 5}}>
//             The Dime
//             </Text>
//           </Pressable>
//           </View>
      
//           <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
//           <Pressable
//           onPress={() => navigation.navigate('Replay')}>
//             <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 35, left: 110, marginTop: 5}}>
//             Replay 
//             </Text>
//           </Pressable>
//           </View>
      
//           <View style = {{width: '85%', height: '8%', backgroundColor: '#219ebc', marginTop: 50}}>
//           <Pressable
//           onPress={() => navigation.navigate('Halligan Bar')}>
//             <Text style = {{fontFamily: 'Futura', color:'white', fontSize: 35, left: 65, marginTop: 5}}>
//             Halligan Bar
//             </Text>
//           </Pressable>
//           </View>
      
//           <View style = {styles.bottomBar}> 
//               <Pressable 
//               onPress={() => {navigation.navigate('NeighborhoodList')}}>
//               <Image
//               style = {{width: 65, height: 65, left: 30, marginTop: 5}}
//               source = {require('.../../../generateIcon.png')} />
//               </Pressable>
      
//               <Pressable 
//               onPress={() => {navigation.navigate('NeighborhoodList')}}>
//               <Image
//               style = {{width: 60, height: 60, left: 105, marginTop:10}}
//               source = {require('./src/img/generateIcon.png')} />
//               </Pressable> 
              
//               <Pressable 
//               onPress={() => {navigation.navigate('NeighborhoodList')}}>
//               <Image
//               style = {{width: 50, height: 50, left: 185, marginTop:10}}
//               source = {require('./src/img/quizIcon.png')} />
//               </Pressable> 
//             </View>
      
      
//         </View>
//         );
// }
// }

// export default LincolnPark;