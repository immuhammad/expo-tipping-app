import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TouchableIcons from './TouchableIcons';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const CustomBottomSheet = ({ onClose, onConfirm, item }) => {
    const bottomSheetRef = useRef(null);

    const handleOpenBottomSheet = () => {
        // if (bottomSheetRef.current) {
        //     bottomSheetRef.current.open();
        // }
    };
    const handleCloseBottomSheet = () => {
        onClose()
        // if (bottomSheetRef.current) {
        //     bottomSheetRef.current.close();
        // }
    };
    return (
        <>
            <GestureHandlerRootView>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={['30%', '100%']}
                //isVisible={isVisible}
                //onClose={onClose}
                >
                    <View style={styles.container}>
                        {/* <Image source={item.image} style={styles.image} /> */}
                        <View>
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>{item?.name}</Text>
                                <Text style={styles.starIcon}><TouchableIcons iconName3="star" /></Text>
                                <Text style={styles.ratings}>{item?.ratings}</Text>
                                <Text style={styles.business}> {item?.business}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.button}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCloseBottomSheet} style={styles.button}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </BottomSheet>
            </GestureHandlerRootView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: '#49966280',
        paddingLeft: 10,
        borderRadius: 20,
        height: 95,
        //paddingHorizontal: 20,
        // paddingVertical: 5, 
        //justifyContent: 'space-between',
        // paddingBottom:30,
        //backgroundColor: '#FFFFFF',
    },
    image: {
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
        paddingTop: 15,
    },
    starIcon: {
        marginLeft: 15,
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
        marginBottom: 30,
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

});
export default CustomBottomSheet;
