import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Welcome from './Screens/Welcome';
import Signin from './Screens/Signin';
import RegistrationScreen from './Screens/RegisterationScreen';
import TeamScreen from './Screens/TeamScreen';
import SignUpScreen from './Screens/SignUpScreen';
import VerificationScreen from './Screens/VerificationScreen';
import NewPassword from './Screens/NewPassword';
import GiveTip from './Screens/GiveTip';
import TabScreen from './Screens/GiveTip';
import Receiver from './Screens/GetReceiverDetails';
import AuthIDComponent from './Screens/UniqueID';
import AuthScanComponent from './Screens/ScanQRScreen';
import PersonDetails from './Screens/PersonDetail';
//import * as SplashScreen from 'expo-splash-screen';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       {/* <Home/> */}
//       {/* <Welcome/> */}
//       {/* <Signin/> */}
//       {/* <RegistrationScreen/> */}
//       {/* <TeamScreen/> */}
//       <SignUpScreen/>
//       {/* <VerificationScreen/> */}
//       {/* <NewPassword/> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const Stack = createNativeStackNavigator();
const App = () => (

  <NavigationContainer style={styles.container}>
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='Signin' component={Signin} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GiveTip" component={GiveTip} options={{ headerShown: false }} />
      <Stack.Screen name="GetReceiverDetails" component={Receiver} options={{ headerShown: false }} />
      <Stack.Screen name="UniqueID" component={AuthIDComponent} options={{ headerShown: false }} />
      <Stack.Screen name="ScanQRScreen" component={AuthScanComponent} options={{ headerShown: false }} />
      <Stack.Screen name="PersonDetails" component={PersonDetails} options={{ headerShown: false }} />
      <Stack.Screen name="TeamScreen" component={TeamScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
      <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  </NavigationContainer>


);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
export default App;





// import React, { useEffect } from 'react';
// import { SplashScreen } from 'expo';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Home';
// //import LoginScreen from './screens/LoginScreen';

// const Stack = createStackNavigator();

// function App() {
//   useEffect(() => {
//     SplashScreen.preventAutoHide(); // Prevent the splash screen from auto-hiding
//     setTimeout(() => SplashScreen.hide(), 2000); // Hide the splash screen after 2 seconds
//   }, []);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >
//         <Stack.Screen name="Home" component={Home} />
//         {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
