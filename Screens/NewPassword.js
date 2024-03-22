import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
    Button,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const AuthComponent = ({ navigation }) => {
    const [newpassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [notshowPassword, setNotShowPassword] = useState('');
    const handlePassword = async () => {
        if (newpassword !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        if (newpassword == '' || confirmPassword == '') {
            alert("Kindly Enter Your Creditionals.");
            return;
        }
        try {
            await AsyncStorage.setItem('newpassword', newpassword);
            alert('Password Change successful');
            navigation.navigate('Signin')
            // const resetStack = () => {
            //     navigation.dispatch(
            //         CommonActions.reset({
            //             index: 0,
            //             routes: [{ name: 'Sigin' }],
            //         })
            //     );
            // };
            // resetStack();

        } catch (error) {
            console.error('Error registering:', error);
        }
    };
    return (

        <ScrollView style={styles.container}>
            <Text style={styles.regularText}> New Password</Text>
            <View style={styles.imagecontainer}>
                <Image
                    source={require('../img/head.png')}
                    style={styles.image}
                    resizeMode="center"
                    // paddingLeft={20}
                    accessible={true}
                />
            </View>
            <View style={styles.picker}>
                <TextInput style={styles.inputpassword}
                    placeholder="New Password"
                    placeholderTextColor={'#63AD7880'}
                    secureTextEntry={!notshowPassword}
                    value={newpassword}
                    onChangeText={setNewPassword}
                   
                />
                <TouchableOpacity style={styles.toggleButton}
                    onPress={() => setNotShowPassword(!notshowPassword)}>
                    {/* <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text> */}
                    <Text>{notshowPassword ? <Ionicons name="ios-eye-off" size={24} color="#FFA26B" /> : <AntDesign name="eye" size={24} color="#FFA26B" />}</Text>

                </TouchableOpacity>
            </View>
            <View style={styles.picker}>
                <TextInput style={styles.inputpassword}
                    placeholder="Confirm Password"
                    placeholderTextColor={'#63AD7880'}
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
            <TouchableOpacity onPress={() => handlePassword()} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#333333',
        //justifyContent: 'flex-start',
        padding: 20,
        //paddingTop: 180
    },

    regularText: {
        fontSize: 35,
        padding: 40,
        marginVertical: 8,
        color: '#499662',
        textAlign: 'center',
        //backgroundColor: 'black',
        fontWeight: 'bold',
        // borderRadius: 80,
        //borderCurve: 'circular',
    },
    picker: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        height: 50,
        width: 300,
        margin: 12,
        borderWidth: 2,
        // padding: 15,
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor: '#63AD7880',
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
    button: {
        height: 50,
        width: 300,
        backgroundColor: '#499662',
        //alignSelf: 'strectch',
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 9,
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

});
export default AuthComponent;


