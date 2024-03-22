import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';


const JoinTeam = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join a Team</Text>
      <View style={styles.imagecontainer}>
        <Image
          source={require('../img/head.png')}
          style={styles.image}
          resizeMode="center"
          // paddingLeft={20}
          accessible={true}
        />
      </View>

      <TouchableHighlight onPress={()=>navigation.navigate('SignUpScreen')} style={styles.button}>
        <Text style={styles.buttonText}>Create Team account</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>navigation.navigate('Signin')} style={styles.button} >
        <Text style={styles.buttonText}>Join existing team</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: 'flex-start',
    //   alignItems: 'center',
    //   backgroundColor: '#333333',
    //   padding: 10,
    paddingTop: 50,
  },
  button: {
    height: 60,
    width: 310,
    backgroundColor: '#499662',
    //alignSelf: 'strectch',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,

  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
    //padding:2,
  },
  title: {
    fontSize: 40,
    marginBottom: 15,
    color: '#499662',
    //padding: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imagecontainer: {
    flex: 0.70,
    paddingLeft: 20,
    marginTop: 50,
    alignSelf: 'center',
  },
  image: {
    width: 300,
    height: 250,
    paddingLeft: 20,
  },
});
export default JoinTeam;