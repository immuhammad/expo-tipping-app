//  import { StatusBar } from 'expo-status-bar';
// // import React, { useEffect } from 'react';
// // import { StyleSheet, Text, View, Image } from 'react-native';
// //import AsyncStorage from '@react-native-async-storage/async-storage';
// //import Animated, { Easing, Value, timing } from 'react-native-reanimated';

// // const Home = ({ navigation }) => {
// //   // const opacity = new Value(0);
// //   // const animate = () => {
// //   //  timing(opacity, {
// //   //     toValue: 1,
// //   //     duration: 1000,
// //   //     easing: Easing.inOut(Easing.ease),
// //   //   }).start(() => {

// //   //     navigation.navigate('Welcome');
// //   //   });
// //   // };
// //   // React.useEffect(() => {
// //   //   animate();
// //   // },
// //   //   []);

// //   return (

// //     <View style={styles.container}>

// //       <Animated.Image
// //         source={require('./img/head.png')}
// //         style={[styles.image, { opacity }]}
// //         //style={styles.image}
// //         resizeMode="center"
// //         accessible={true}
// //       />
// //     </View>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   image: {
// //     width: 300,
// //     height: 250,

// //   },
// // });
// // export default Home;


import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" duration={2000}>
        <Image source={require('./img/head.png')}
          resizeMode="center"
          accessible={true}
          style={styles.image} />
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300, 
  },
});
export default HomeScreen;
