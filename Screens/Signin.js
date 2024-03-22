import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AntDesign } from '@expo/vector-icons';
import ForgotPasswordModal from './../components/ForgotPasswordModel';
const AuthLogComponent = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        navigation.navigate('VerificationScreen')
    };
    // const handleForgotpassword = async () => {
    //     try {

    //         alert('A password Reset Link has sent to your Registered Email.');
    //         navigation.navigate('VerificationScreen')
    //     }
    //     catch (error) {
    //         console.error('Error Forget in:', error);
    //     }
    // };
    const SignUp = async () => {
        try {

            navigation.navigate('SignUpScreen')
        }
        catch (error) {
            console.error('Error Forget in:', error);
        }
    };
    const handleLogin = async () => {
        try {
            const storedEmail = await AsyncStorage.getItem('email');
            const storedPassword = await AsyncStorage.getItem('password');

            if (email === storedEmail && password === storedPassword) {
                alert('Login successful');

                navigation.navigate('RegistrationScreen')
                // const resetStack = () => {
                //   navigation.dispatch(
                //     CommonActions.reset({
                //       index: 0,
                //       routes: [{ name: 'LogoutScreen' }],
                //     })
                //   );
                // };
                // resetStack();
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.regularText}>Sign in</Text>
            <View style={styles.imagecontainer}>
                <Image
                    source={require('../img/head.png')}
                    style={styles.image}
                    resizeMode="center"
                    accessible={true}
                />
            </View>
            <TextInput style={styles.inputBox}
                placeholder="Email id"
                placeholderTextColor={'green'}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.inputBox}
                placeholder="Password"
                placeholderTextColor={'green'}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.toggleButton}
                onPress={() => setShowPassword(!showPassword)}>
                {/* <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text> */}
                <AntDesign name="eye" size={24} color="#FFA26B" />
            </TouchableOpacity>
            
            <View>
               
                <TouchableOpacity onPress={openModal}>
                    <Text style={{ position:'absolute',right:10, color: '#FFA26B', fontSize: 15, }}>Forgot password?</Text></TouchableOpacity>
                <ForgotPasswordModal isVisible={isModalVisible} closeModal={closeModal} />
            </View>
            <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => SignUp()} >
                <Text style={{ alignSelf: 'center', color: '#FFA26B', padding: 25, fontSize: 15, }}>
                    Don't have an Account? <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>Sign Up</Text></Text>
            </TouchableOpacity>
            {/* <Button title="Login" onPress={handleLogin} style={styles.button}/> */}
        </ScrollView>
    );
}
export default AuthLogComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#333333',
        //justifyContent: 'flex-start',
        padding: 20,
        //paddingTop: 180
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        //textShadowRadius:3000000,
        //textDecorationLine:'underline line-through',
        //backgroundColor:'powderblue',

    },
    regularText: {
        fontSize: 35,
        padding: 40,
        //marginVertical: 8,
        color: '#499662',
        textAlign: 'center',
        //backgroundColor: 'black',
        fontWeight: 'bold',
        //borderRadius: 40,
        //borderCurve: 'circular',
    },
    inputBox: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 15,
        fontSize: 17,
        borderRadius: 15,
        paddingLeft: 15,
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
        alignItems: 'center',
        marginTop: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
    imagecontainer: {
        flex: 0.70,
        //justifyContent: 'center',
        //alignItems: 'center',
        // backgroundColor: '#333333',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 45,
    },
    image: {
        width: 300,
        height: 250,
        paddingLeft: 20,
    },
    toggleButton: {
        position: 'absolute',
        right: 25,
        top: 525,
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    forgetcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        textAlign: 'center',
    },
    forgottenPasswordLink: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});