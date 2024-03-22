import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';


const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register As</Text>
      <View style={styles.imagecontainer}>
        <Image
          source={require('../img/head.png')}
          style={styles.image}
          resizeMode="center"
          // paddingLeft={20}
          accessible={true}
        />
      </View>

      <TouchableHighlight onPress={() => navigation.navigate('GetReceiverDetails')} style={styles.button}>
        <Text style={styles.buttonText}>Tip Receiver</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('TabScreen')} style={styles.button}>
        <Text style={styles.buttonText}>Tip Giver</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('TeamScreen')} style={styles.button}>
        <Text style={styles.buttonText}>Join a Team</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: '#499662',
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
export default Register;