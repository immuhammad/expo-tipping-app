import React, { useRef } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const VerificationCodeInput = ({navigation}) => {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const handleTextChange = (text, index) => {
    if (text.length === 1 && index < 2) {
      inputRefs[index + 1].current.focus();
    }
  };
  const Resend = async () => {
    try {

      navigation.navigate('Signin')
    }
    catch (error) {
      console.error('Error Forget in:', error);
    }
  };
  return (
    <ScrollView style={styles.container}>
       <Text style={styles.regularText}>Verification</Text>
      <View style={styles.imagecontainer}>
        <Image
          source={require('../img/head.png')}
          style={styles.image}
          resizeMode="center"
          accessible={true}
        />
      </View>
      <View style={styles.boxcontainer}>
        {inputRefs.map((inputRef, index) => (
          
            <TextInput
              key={index}
              ref={inputRef}
              style={styles.input}
              onChangeText={(text) => handleTextChange(text, index)}
              maxLength={1}
              keyboardType="numeric"
              placeholder='-'
            />
        ))}

      </View>
      <TouchableOpacity onPress={() => Resend()} >
        <Text style={{ alignSelf: 'center', color: '#FFA26B', padding: 25, fontSize: 15, }}>
          Didn't receive a code?
          <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
            Resend</Text></Text>
      </TouchableOpacity>
      <View style={styles.innercontainer}> 
      <TouchableOpacity onPress={() => navigation.navigate('NewPassword')} style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingTop: 40,
  },
  imagecontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  regularText: {
    fontSize: 35,
    //padding: 10,
    //marginVertical: 8,
    marginBottom:45,
    color: '#499662',
    textAlign: 'center',
    //backgroundColor: 'black',
    fontWeight: 'bold',
    //borderRadius: 40,
    //borderCurve: 'circular',
},
  imagecontainer: {
    flex: 0.45,
    //justifyContent: 'center',
    //alignItems: 'center',
    // backgroundColor: '#333333',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 45,
    alignSelf:'center',
  },
  image: {
    width: 300,
    height: 250,
    paddingLeft: 20,
  },
  input: {
    width: 50,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#499662',
    color: '#63AD78B2',
    // flexDirection:'row',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 2,
    margin: 15,
    

  },
  boxcontainer: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    //marginTop:30,
    flexDirection: 'row',
    alignSelf:'center',
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: '#499662',
    //alignSelf: 'strectch',
    alignItems: 'center',
    marginTop: 50,
    alignSelf:'center',
    justifyContent: 'center',
    borderRadius: 15,

},
buttonText: {
 
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
},
  innercontainer: {
    marginTop:40,
  }
});

export default VerificationCodeInput;