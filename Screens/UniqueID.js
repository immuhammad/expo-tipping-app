import React, { useCallback, useRef, useMemo, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TouchableIcons from "../components/TouchableIcons";

const personData = {
    //image: require('../img/template.png'),
    name: 'John Doe',
    businessName: 'XYZ Company',
    ratings: 4.5,
    image: require('../img/template.png'),
};
const AuthIDComponent = () => {
    const [ID, setID] = useState('');

    const handleSheetChanges = React.useCallback((index) => {
        console.log("handleSheetChanges", index);
    }, []);

    const renderBackdrop = React.useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );

    // hooks
    const sheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);


    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    // render
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Text style={styles.regularText}>Enter Unique ID</Text>
            <View style={styles.imagecontainer}>
                <Image
                    source={require('../img/head.png')}
                    style={styles.image}
                    resizeMode="center"
                    accessible={true}
                />
            </View>
            <TextInput style={styles.inputBox}
                placeholder="Enter Unique ID"
                placeholderTextColor={'green'}
                secureTextEntry
                value={ID}
                onChangeText={setID}
            />
            <TouchableOpacity onPress={() => handleSnapPress(1)} style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClosePress()} style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <BottomSheet
                ref={sheetRef}
                index={-1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose
                backgroundStyle={{ backgroundColor: "#F8F8F8" }}
                backdropComponent={renderBackdrop}
            // keyboardBehavior="fillParent"
            >
                <View style={styles.bottomcontainer}>
                    <Image source={personData.image} style={styles.image1} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{personData.name}</Text>
                            <Text style={styles.starIcon}><TouchableIcons iconName3="star" /></Text>
                            <Text style={styles.ratings}>{personData.ratings}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={styles.business}>{personData.businessName}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => null} style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => null} style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',

    },
    regularText: {
        fontSize: 35,
        padding: 40,
        color: '#499662',
        textAlign: 'center',
        fontWeight: 'bold',
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
        // borderCurve:'circular',
        borderColor: '#499662',
        // color:'green',
        // backgroundColor: '#EDEFEE',
    },
    button: {
        height: 50,
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
    bottomcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: '#49966280',
        paddingLeft: 10,
        borderRadius: 20,
        height: 100,
    },
    image1: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#499662',
        marginRight: 10,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: 15,
    },
    starIcon: {
        marginLeft: 100,
        marginTop: 13,
    },
    name: {
        fontSize: 18,
        color: '#499662',
        fontWeight: 'bold',
    },
    ratings: {
        fontSize: 16,
        color: '#499662',
        fontWeight: 'bold',
        // marginTop: 10,
    },
    business: {
        fontSize: 15,
        color: '#499662',
        // marginBottom: 30,
    },
});

export default AuthIDComponent;