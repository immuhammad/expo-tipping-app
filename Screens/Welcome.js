import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
//import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import OpenIconLink from './../components/TouchableIcons';

import TouchableImage from './../components/TouchableIcons';
import { useRoute } from '@react-navigation/native';

const Welcome = ({ navigation }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // const [isClicked, setClicked] = useState(false);
    // const handleClick = () => {
    //     setClicked(!isClicked);

    // };

    return (

        <View style={styles.container}>
            <View style={{ position: 'absolute', top: 40, right: 15, display: 'flex', flexDirection: 'row' }}>
                <FontAwesome name="language" size={40} color='#FF9A62' />
                <TouchableOpacity onPress={toggleDropdown}>
                    <FontAwesome name={isDropdownOpen ? 'angle-up' : 'angle-down'}
                        size={40} color={'#FF9A62'} />
                </TouchableOpacity>
                {isDropdownOpen && (
                    <View style={{ position: 'relative', }}>
                        <Text
                            style={{ fontSize: 20, borderWidth: 2, color: '#FF9A62', borderRadius: 5, marginBottom: 3, fontStyle: 'italic', padding: 3 }}>
                            Chinese
                        </Text>

                        <Text style={{ fontSize: 20, borderWidth: 2, color: '#FF9A62', borderRadius: 5, fontStyle: 'italic', padding: 3 }}>English</Text>
                    </View>
                )}
            </View>
            <View style={styles.imagecontainer}>
                <Image
                    source={require('../img/head.png')}
                    style={styles.image}
                    resizeMode="center"
                    // paddingLeft={20}
                    accessible={true}
                />
            </View>
            <Text style={styles.title}>Welcome</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Signin')} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('RegistrationScreen')} style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableHighlight>
            <Text style={styles.text}>OR</Text>
            <TouchableHighlight onPress={() => navigation.navigate('RegistrationScreen')} style={styles.button}>
                <Text style={styles.buttonText}>Give tip as guest</Text>
            </TouchableHighlight>
            <Text style={styles.text1}>OR Login with</Text>
            {/*            
            <TouchableOpacity onPress={handleClick} style={styles.iconsContainer}>
                <Ionicons name="logo-google" size={35} width={40}  color="#4285F4" />

                <MaterialIcons name="facebook" size={35} width={40}color="blue" />
                <Ionicons name="logo-apple" size={35} width={40}color='black' />
            </TouchableOpacity> */}
            {/* <View style={styles.iconsContainer}>
                <OpenIconLink url="https://www.google.com" iconName="logo-google" />
                <OpenIconLink url="https://www.facebook.com" iconName1="facebook" />
                <OpenIconLink url="https://www.apple.com" iconName2="apple" />
            </View> */}

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <TouchableImage source={require('../img/google.png')} url="https://google.com" />
                <TouchableImage source={require('../img/facebook.png')} url="https://facebook.com" />
                <TouchableImage source={require('../img/apple.png')} url="https://apple.com" />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        // backgroundColor: '#333333',
        //paddingLeft: 20,
        paddingTop: 110,
    },
    imagecontainer: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#333333',
        paddingLeft: 20,
        //paddingBottom: 90,
    },
    button: {
        height: 55,
        width: 310,
        backgroundColor: '#499662',
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        //padding:2,
    },
    title: {
        fontSize: 40,
        // marginTop: 150,
        color: '#499662',
        // paddingTop: 100,
        fontWeight: 'bold',
        //textShadowRadius: 30,
        textAlign: 'center',
        //marginLeft: 29,
    },
    text: {
        fontSize: 20,
        marginTop: 10,
        color: '#499662',
        //padding: 10,
        fontWeight: 'bold',
        //textShadowRadius: 30,
        textAlign: 'center',
    },
    text1: {
        fontSize: 20,
        marginTop: 25,
        color: '#499662',
        //padding: 10,
        fontWeight: 'bold',
        //textShadowRadius: 30,
        marginBottom: 30,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 250,
        paddingLeft: 20,
    },
    iconsContainer: {

        flexDirection: 'row',
        marginBottom: 25,
        // marginBottom:70,
        //paddingVertical:10,
        //alignItems:'stretch',
        justifyContent: 'center',

        //paddingLeft: 4,
        //alignItems:'flex-start',
    },

});
export default Welcome;