import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';

const AuthScanComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isScannerVisible, setIsScannerVisible] = useState(false)

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === "granted")
        }
        getBarCodeScannerPermissions()
    }, [])

    const handleBarCodeScanned = ({ data }) => {
        if (!scanned) {
            setScanned(true);
            setIsScannerVisible(false)
            alert(JSON.stringify(data))
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.regularText}>Scan QR Code</Text>
            {hasPermission === null ? (
                <Text>Requesting Camera</Text>
            ) : hasPermission === false ? (
                <Text>No access to camera</Text>
            ) : (
                <View style={styles.imagecontainer}>
                    {
                        isScannerVisible ?
                            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                style={[{
                                    flex: 1,
                                    zIndex: 1,
                                }, StyleSheet.absoluteFillObject]}
                            /> : <Image
                                source={require('../img/scanQR.png')}
                                style={styles.image}
                                resizeMode="contain"
                            />
                    }

                </View>
            )}
            <TouchableOpacity onPress={() => setIsScannerVisible(true)} style={styles.button}>
                <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#333333',
        //justifyContent: 'flex-start',
        padding: 30,
        //paddingTop: 70
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
        marginBottom: 50,
        borderColor: '#499662',
    },
    button: {
        height: 60,
        width: 300,
        backgroundColor: '#499662',
        //alignSelf: 'strectch',
        alignItems: 'center',
        marginTop: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        //marginBottom:0,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 25,
    },
    imagecontainer: {
        flex: 0.80,
        //justifyContent: 'center',
        //alignItems: 'center',
        // backgroundColor: '#333333',
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 75,
    },
    image: {
        //paddingRight: 300,
        //padding:20,
        width: 300,
        height: 300,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 16,
    },
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     qrCodeImage: {
//         width: 200,
//         height: 200,
//         position: 'absolute',
//         alignSelf: 'center',
//         bottom: 16,
//     },
// });
export default AuthScanComponent;
