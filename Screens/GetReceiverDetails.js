import React, { useState } from 'react';
import { View, Text,TouchableHighlight,StyleSheet,Image } from 'react-native';


const Receiver=({navigation})=>{
        return (
          <View style={styles.container}>
             <Text style={styles.title}>Get Receiver Details</Text>
              <View style={styles.imagecontainer}>
                <Image
                    source={require('../img/head.png')}
                    style={styles.image}
                    resizeMode="center"
                    // paddingLeft={20}
                    accessible={true}
                />
            </View>
           
            <TouchableHighlight onPress={()=>navigation.navigate('ScanQRScreen') } style={styles.button}>
              <Text style={styles.buttonText}>Scan QR Code</Text>
            </TouchableHighlight>
            <Text style={styles.text}>OR</Text>
            <TouchableHighlight onPress={()=>navigation.navigate('UniqueID') } style={styles.button}>
              <Text style={styles.buttonText}>Enter Unique ID</Text>
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
        width: 310,
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
      fontSize: 35,
      marginBottom: 15,
      color:'#499662',
      //padding: 40,
      textAlign: 'center',
      fontWeight:'bold',
    },
    imagecontainer: {
        flex: 0.70,
        paddingLeft: 20,
        marginTop:50,
        alignSelf:'center',
    },
    image: {
        width: 300,
        height: 250,
        paddingLeft: 20,
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        color: '#499662',
        //padding: 10,
        fontWeight: 'bold',
        //textShadowRadius: 30,
        textAlign: 'center',
    },
  });
export default Receiver;