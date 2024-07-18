// import { View, Text , SafeAreaView,StyleSheet,Image,Dimensions} from 'react-native'
// import React from 'react'

// const WeatherInfo = ({weatherData}) => {
//     const {
//         name,
//         visibility,
//         weather:[{icon, description}],
//         main: {temp,humidity,feels_like, },
//         wind: {speed},
//         sys: {sunrise, sunset},
//     } = weatherData;
//   return (
//   <SafeAreaView style={styles.container}>
//     <View style={{alignItems:'center'}}>
//        <Text style={styles.title}>{name}</Text>
//     </View>
//     <View style={styles.logo}>
//     <Image 
//   style={styles.largeIcon}
//   source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }} 
// />
//     <Text style={styles.currentTemp}>{(temp - 273.15).toFixed(2)} °C</Text>
    
//     </View>
//     {/* <View style={styles.logo}>
//     <Image 
//   style={styles.largeIcon}
//   source={require('../assets/temp.png')} 
// />
//     <Text style={styles.currentTemp}>{feels_like} °C</Text>
    
//     </View> */}
//     <Text style={styles.description}>{description}</Text>
//     <View style={styles.extraInfo}>
// <View style={styles.info}>
//     <Image 
//     style={styles.smallIcon}
//     source={require('../assets/temp.png')} 
//     />
//     <Text style={styles.infoText}>{(feels_like - 273.15).toFixed(2)}  °C</Text>
//     <Text >Feels Like</Text>
// </View>
// <View style={styles.info}>
//     <Image 
//     style={styles.smallIcon}
//     source={require('../assets/humidity1.png')} 
//     />
//     <Text style={styles.infoText}>{humidity}  %</Text>
//     <Text >Humidity</Text>
// </View>
//     </View>
//     <View style={styles.extraInfo}>
// <View style={styles.info}>
//     <Image 
//     style={styles.smallIcon}
//     source={require('../assets/visibility.png')} 
//     />
//     <Text style={styles.infoText}>{visibility}  </Text>
//     <Text > Visibility </Text>
// </View>
// <View style={styles.info}>
//     <Image 
//     style={styles.smallIcon}
//     source={require('../assets/wind.png')} 
//     />
//     <Text style={styles.infoText}>{speed}  m/s</Text>
//     <Text >  Wind Speed</Text>
// </View>
//     </View>
//     <View style={styles.extraInfo}>
// <View style={styles.info}>
//     <Image 
//     style={styles.smallIcon}
//     source={require('../assets/sunrise.png')} 
//     />
//     <Text style={styles.infoText}>{new Date(sunrise*1000).toLocaleString()}  </Text>
//     <Text > Sunrise </Text>
// </View>
// <View style={styles.info}>
//     <Image 
//     style={styles.smallIcon}
//     source={require('../assets/sunset.png')} 
//     />
//     <Text style={styles.infoText}>{new Date(sunset*1000).toLocaleString()}  </Text>
//     <Text > Sunrise </Text>
// </View>
//     </View>
//     </SafeAreaView>
//   )
// }

// export default WeatherInfo
// const styles=StyleSheet.create({
//     container: {
//         flex:1,
//         marginTop:15
//     },
//     title: {
//       width:'100%', 
//       textAlign:'center',
//       fontSize:26,
//       fontWeight:'bold',
//       color:'#e96e50',
//       marginTop:10,
//     },
//     logo:{
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-around'
//     },
//     largeIcon: {
//         width:200,
//         height:200,
        
//     },
//     currentTemp:{
//         fontSize:30,
//         fontWeight:'bold',
//         textAlign:'center',


//     },
//     description:{
//         textAlign:'center',
//         fontSize:24,
//         fontWeight:'bold',
//         marginBottom:10,
//     },
//     info:{
//        width:Dimensions.get('screen').width/2.5,
//        backgroundColor:'#D0EAFA',
//        padding:10,
//        borderRadius:15,
//        justifyContent:'center',
//     },
//     extraInfo:{
// flexDirection:'row',
// justifyContent:'space-around',
// padding:7,
//     },
//     smallIcon:{
//         height:40,
//         width:40,
//         borderRadius:40/2,

//     },
//     infoText:{
//         textAlign:'auto',
//         fontSize:18,
//     }

// })


// import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
// import React from 'react';

// const WeatherInfo = ({ weatherData }) => {
//   const {
//     name,
//     visibility,
//     weather: [{ icon, description }],
//     main: { temp, humidity, feels_like },
//     wind: { speed },
//     sys: { sunrise, sunset },
//   } = weatherData;

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={{ alignItems: 'center' }}>
//         <Text style={styles.title}>{name}</Text>
//       </View>
//       <View style={styles.logo}>
//         <Image
//           style={styles.largeIcon}
//           source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
//         />
//         <Text style={styles.currentTemp}>{(temp - 273.15).toFixed(2)} °C</Text>
//       </View>
//       <Text style={styles.description}>{description}</Text>
//       <View style={styles.extraInfo}>
//         <View style={styles.info}>
//           <Image style={styles.smallIcon} source={require('../assets/temp1.png')} />
//           <Text style={styles.infoText}>{(feels_like - 273.15).toFixed(2)} °C</Text>
//           <Text>Feels Like</Text>
//         </View>
//         <View style={styles.info}>
//           <Image style={styles.smallIcon} source={require('../assets/humidity.png')} />
//           <Text style={styles.infoText}>{humidity} %</Text>
//           <Text>Humidity</Text>
//         </View>
//       </View>
//       <View style={styles.extraInfo}>
//         <View style={styles.info}>
//           <Image style={styles.smallIcon} source={require('../assets/visibility.png')} />
//           <Text style={styles.infoText}>{visibility} m</Text>
//           <Text>Visibility</Text>
//         </View>
//         <View style={styles.info}>
//           <Image style={styles.smallIcon} source={require('../assets/wind.png')} />
//           <Text style={styles.infoText}>{speed} m/s</Text>
//           <Text>Wind Speed</Text>
//         </View>
//       </View>
//       <View style={styles.extraInfo}>
//         <View style={styles.info}>
//           <Image style={styles.smallIcon} source={require('../assets/sunrise.png')} />
//           <Text style={styles.infoText}>{new Date(sunrise * 1000).toLocaleTimeString()}</Text>
//           <Text>Sunrise</Text>
//         </View>
//         <View style={styles.info}>
//           <Image style={styles.smallIcon} source={require('../assets/sunset.png')} />
//           <Text style={styles.infoText}>{new Date(sunset * 1000).toLocaleTimeString()}</Text>
//           <Text>Sunset</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default WeatherInfo;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 15,
//   },
//   title: {
//     width: '100%',
//     textAlign: 'center',
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF7F7F',
//     marginTop: 10,
//   },
//   logo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     marginBottom:-15,
//   },
//   largeIcon: {
//     width: 200,
//     height: 200,
//   },
//   currentTemp: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   description: {
//     textAlign: 'center',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   extraInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 7,
//   },
//   info: {
//     width: Dimensions.get('screen').width / 2.5,
//     backgroundColor: '#FFF0F0',
//     padding: 10,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   smallIcon: {
//     height: 40,
//     width: 40,
//     borderRadius:20,
    
//   },
//   infoText: {
//     textAlign: 'center',
//     fontSize: 18,
//   },
// });




import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';

const WeatherInfo = ({ weatherData, isDay }) => {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;

  const backgroundColor = isDay ? '#FCF5DB' : '#2C3E50';
  const textColor = isDay ? 'black' : 'white';

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.title, { color: textColor }]}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.largeIcon}
          source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
        />
        <Text style={[styles.currentTemp, { color: textColor }]}>{(temp - 273.15).toFixed(2)} °C</Text>
      </View>
      <Text style={[styles.description, { color: textColor }]}>{description}</Text>
      <View style={styles.extraInfo}>
        <View style={[styles.info, { backgroundColor: isDay ? 'rgba(208, 234, 250, 0.3)' : 'rgba(208, 234, 250, 0.3)' }]}>
          <Image style={styles.smallIcon} source={require('../assets/temp1.png')} />
          <Text style={[styles.infoText, { color: textColor }]}>{(feels_like - 273.15).toFixed(2)} °C</Text>
          <Text style={{ color: textColor }}>Feels Like</Text>
        </View>
        <View style={[styles.info, { backgroundColor: isDay ? 'rgba(208, 234, 250, 0.3)' : 'rgba(208, 234, 250, 0.3)' }]}>
          <Image style={styles.smallIcon} source={require('../assets/humidity.png')} />
          <Text style={[styles.infoText, { color: textColor }]}>{humidity} %</Text>
          <Text style={{ color: textColor }}>Humidity</Text>
        </View>
      </View>
      <View style={styles.extraInfo}>
        <View style={[styles.info, { backgroundColor: isDay ? 'rgba(208, 234, 250, 0.3)' : 'rgba(208, 234, 250, 0.3)' }]}>
          <Image style={styles.smallIcon} source={require('../assets/visibility.png')} />
          <Text style={[styles.infoText, { color: textColor }]}>{visibility} m</Text>
          <Text style={{ color: textColor }}>Visibility</Text>
        </View>
        <View style={[styles.info, { backgroundColor: isDay ? 'rgba(208, 234, 250, 0.3)' : 'rgba(208, 234, 250, 0.3)' }]}>
          <Image style={styles.smallIcon} source={require('../assets/wind.png')} />
          <Text style={[styles.infoText, { color: textColor }]}>{speed} m/s</Text>
          <Text style={{ color: textColor }}>Wind Speed</Text>
        </View>
      </View>
      <View style={styles.extraInfo}>
        <View style={[styles.info, { backgroundColor: isDay ? 'rgba(208, 234, 250, 0.3)' : 'rgba(208, 234, 250, 0.3)' }]}>
          <Image style={styles.smallIcon} source={require('../assets/sunrise.png')} />
          <Text style={[styles.infoText, { color: textColor }]}>
            {new Date(sunrise * 1000).toLocaleTimeString()}
          </Text>
          <Text style={{ color: textColor }}>Sunrise</Text>
        </View>
        <View style={[styles.info, { backgroundColor: isDay ? 'rgba(208, 234, 250, 0.3)' : 'rgba(208, 234, 250, 0.3)' }]}>
          <Image style={styles.smallIcon} source={require('../assets/sunset.png')} />
          <Text style={[styles.infoText, { color: textColor }]}>
            {new Date(sunset * 1000).toLocaleTimeString()}
          </Text>
          <Text style={{ color: textColor }}>Sunset</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop:-20,
  },
  largeIcon: {
    width: 200,
    height: 200,
  },
  currentTemp: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop:-15,
     },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 7,
  },
  info: {
    width: Dimensions.get('screen').width / 2.5,
    backgroundColor: 'rgba(208, 234, 250, 0.7)', // Màu trong suốt với opacity 0.7
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  infoText: {
    fontSize: 18,
  },
});
