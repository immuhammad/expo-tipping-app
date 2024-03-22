import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CountryPicker from 'react-native-country-picker-modal';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import { CommonActions } from '@react-navigation/native';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState({ cca2: 'US', withCallingCode: '1' });
    const [phoneNumber, setPhoneNumber] = useState('');
    const onCountrySelect = (country) => {
        console.log(country)
        setCountry(country);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notshowPassword, setNotShowPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        if (name == '' || email == '' || password == '' || confirmPassword == '') {
            alert("Kindly Enter Your Creditionals.");
            return;
        }
        try {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            alert('Registration successful');
            navigation.navigate('Signin');
            //   const resetStack = () => {
            //     navigation.dispatch(
            //       CommonActions.reset({
            //         index: 0,
            //         routes: [{ name: 'Login' }],
            //       })
            //     );
            //   };
            //   resetStack();

        } catch (error) {
            console.error('Error registering:', error);
        }
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.regularText}> Sign Up</Text>
            <TextInput style={styles.inputBox}
                placeholder="UserName"
                value={name}
                onChangeText={setName}
            />
            <View style={styles.picker}>
                <CountryPicker
                    withFlag
                    withCallingCode
                    withFilter
                    withAlphaFilter
                    countryCode={country.cca2}
                    onSelect={onCountrySelect}

                />

                <TextInput style={styles.inputnumber}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />

            </View>
            <TextInput style={styles.inputBox}
                placeholder="Email id"
                value={email}
                onChangeText={setEmail}
            />
            <View style={styles.picker}>
                <TextInput style={styles.inputpassword}
                    placeholder="Password"
                    secureTextEntry={!notshowPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.toggleButton}
                    onPress={() => setNotShowPassword(!notshowPassword)}>
                    {/* <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text> */}
                    <Text>{notshowPassword ? <Ionicons name="ios-eye-off" size={24} color="#FFA26B" /> :
                     <AntDesign name="eye" size={24} color="#FFA26B" />}</Text>

                </TouchableOpacity>
            </View>
            <View style={styles.picker}>
                <TextInput style={styles.inputpassword}
                    placeholder="Confirm Password"
                    secureTextEntry={!showPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={styles.toggleButton}
                    onPress={() => setShowPassword(!showPassword)}>
                    {/* <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text> */}

                    <Text>{showPassword ? <AntDesign name="eye" size={24} color="#FFA26B" /> :
                        <Ionicons name="ios-eye-off" size={24} color="#FFA26B" />}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleSignUp()} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
                <Text style={{ alignSelf: 'center', color: '#FFA26B', padding: 25, fontSize: 15, }}>
                    Already have an Account? <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        Login</Text></Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#333333',
        //justifyContent: 'flex-start',
        //padding: 20,
        paddingTop: 50,

    },

    regularText: {
        fontSize: 40,
        //padding: 20,
        //marginVertical: 8,
        paddingBottom: 90,
        color: '#499662',
        textAlign: 'center',
        //s backgroundColor: 'black',
        fontWeight: 'bold',
        //borderRadius: 80,
        //borderCurve: 'circular',
    },
    picker: {
        flexDirection: 'row', alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 2,
        height: 50,
        width: 300,
        margin: 12,
        borderWidth: 2,
        // padding: 15,
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor: '#499662',
        alignSelf: 'center',
    },
    inputnumber: {
        flex: 1,
        height: 46,
        padding: 10,
        borderLeftWidth: 2,
        paddingLeft: 15,
        fontSize: 17,
        borderColor: '#499662',
       // alignSelf: 'center',
    },
    inputBox: {
        //marginTop:50,
        height: 50,
        width: 300,
        margin: 12,
        borderWidth: 2,
        padding: 15,
        fontSize: 17,
        borderRadius: 15,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        // borderCurve:'circular',
        borderColor: '#499662',
        // color:'green',
        // backgroundColor: '#EDEFEE',
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: '#499662',
        //alignSelf: 'strectch',
        alignSelf: 'center',
        marginTop: 50,
        //marginLeft: 30,
        justifyContent: 'center',
        borderRadius: 15,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
    toggleButton: {
        position: 'absolute',
        right: 10,
    },
    inputpassword: {
        flex: 1,
        height: 46,
        paddingLeft: 5,
        fontSize: 17,
    },
});
export default SignUp;

