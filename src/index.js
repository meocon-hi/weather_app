// import { View, Text, StyleSheet, Alert, ActivityIndicator, TextInput, Button } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import Constants from 'expo-constants';
// import WeatherInfo from './WeatherInfo';

// const API_KEY = '38b214ccb9e2ea77506a7a64aae3898a';

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loaded, setLoaded] = useState(false);
//   const [cityName, setCityName] = useState('Hanoi'); // Thêm state cho tên thành phố

//   const fetchWeatherData = async (city) => {
//     try {
//       setLoaded(false);
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
//       if (response.status === 200) {
//         const data = await response.json();
//         setWeatherData(data);
//       } else {
//         setWeatherData(null);
//         Alert.alert('Error', 'City not found');
//       }
//       setLoaded(true);
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchWeatherData(cityName);
//   }, []);

//   if (!loaded) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="red" />
//       </View>
//     );
//   }

//   const handleSearch = () => {
//     fetchWeatherData(cityName);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Weather App</Text>
//       </View>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter city name"
//           value={cityName}
//           onChangeText={setCityName}
//         />
//         <Button title="Search" onPress={handleSearch} />
//       </View>
//       {weatherData && <WeatherInfo weatherData={weatherData} />}
//     </View>
//   );
// };

// export default Weather;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#FCF5DB',
//       paddingTop: Constants.statusBarHeight,
//     },
//     header: {
//       alignItems: 'center',
//       backgroundColor: '#C5D2EF',
//       justifyContent: 'center',
//       height: 80,
//     },
//     headerTitle: {
//       fontSize: 20,
//       color: 'black',
//       fontWeight: 'bold',
//     },
//     searchContainer: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin: 10, // Giảm margin để làm cho nhỏ hơn
//     },
//     input: {
//       borderColor: '#CCCCCC',
//       borderWidth: 1,
//       padding: 8, // Giảm padding để làm cho nhỏ hơn
//       flex: 1,
//       marginRight: 5, // Giảm margin để làm cho nhỏ hơn
//       borderRadius: 5, // Bo góc để trông đẹp hơn
//       height: 40, // Đặt chiều cao cụ thể
//     },
//     button: {
//       height: 40,
//       paddingHorizontal: 15,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#C5D2EF',
//       borderRadius: 5,
//     },
//     buttonText: {
//       color: 'black',
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//   });




// import { View, Text, StyleSheet, Alert, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import Constants from 'expo-constants';
// import WeatherInfo from './WeatherInfo';

// const API_KEY = '38b214ccb9e2ea77506a7a64aae3898a';

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loaded, setLoaded] = useState(false);
//   const [cityName, setCityName] = useState('Hanoi'); 

//   const fetchWeatherData = async (city) => {
//     try {
//       setLoaded(false);
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
//       if (response.status === 200) {
//         const data = await response.json();
//         setWeatherData(data);
//       } else {
//         setWeatherData(null);
//         Alert.alert('Error', 'City not found');
//       }
//       setLoaded(true);
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchWeatherData(cityName);
//   }, []);

//   const isDayTime = (sunrise, sunset) => {
//     const currentTime = new Date().getTime() / 1000; // current time in seconds
//     return currentTime > sunrise && currentTime < sunset;
//   };

//   if (!loaded) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#FF7F7F" />
//       </View>
//     );
//   }

//   const handleSearch = () => {
//     fetchWeatherData(cityName);
//   };

//   const backgroundColor = weatherData && isDayTime(weatherData.sys.sunrise, weatherData.sys.sunset) ? '#FCF5DB' : '#2C3E50';
//   const textColor = weatherData && isDayTime(weatherData.sys.sunrise, weatherData.sys.sunset) ? 'black' : 'white';

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <View style={styles.header}>
//         <Text style={[styles.headerTitle, { color: textColor }]}>Weather App</Text>
//       </View>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={[styles.input, { color: textColor, borderColor: textColor }]}
//           placeholder="Enter city name"
//           placeholderTextColor={textColor}
//           value={cityName}
//           onChangeText={setCityName}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleSearch}>
//           <Text style={styles.buttonText}>Search</Text>
//         </TouchableOpacity>
//       </View>
//       {weatherData && <WeatherInfo weatherData={weatherData} />}
//     </View>
//   );
// };

// export default Weather;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//   },
//   header: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 80,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
//   input: {
//     borderWidth: 1,
//     padding: 8,
//     flex: 1,
//     marginRight: 5,
//     borderRadius: 5,
//     height: 40,
//   },
//   button: {
//     height: 40,
//     paddingHorizontal: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FF7F7F',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



import { View, Text, StyleSheet, Alert, ActivityIndicator, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import WeatherInfo from './WeatherInfo';

const API_KEY = '38b214ccb9e2ea77506a7a64aae3898a';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [cityName, setCityName] = useState('Hanoi'); 

  const fetchWeatherData = async (city) => {
    try {
      setLoaded(false);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
        Alert.alert('Error', 'City not found');
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchWeatherData(cityName);
  }, []);

  const isDayTime = (sunrise, sunset) => {
    const currentTime = new Date().getTime() / 1000; // current time in seconds
    return currentTime > sunrise && currentTime < sunset;
  };

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FF7F7F" />
      </View>
    );
  }

  const handleSearch = () => {
    fetchWeatherData(cityName);
  };

  const isDay = weatherData && isDayTime(weatherData.sys.sunrise, weatherData.sys.sunset);
  const backgroundSource = isDay ? require('../assets/n5.png') : require('../assets/n1.png');
  const textColor = isDay ? 'black' : 'white';

  return (
    <ImageBackground source={backgroundSource} style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: textColor }]}>Weather App</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.input, { color: textColor, borderColor: textColor }]}
          placeholder="Enter city name"
          placeholderTextColor={textColor}
          value={cityName}
          onChangeText={setCityName}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    flex: 1,
    marginRight: 5,
    borderRadius: 5,
    height: 40,
 
  }
,  
  button: {
    height: 40,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498DB', // Màu xanh nhạt
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
