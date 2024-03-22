import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RatingsBottomSheet = ({ personData }) => {
    const bottomSheetRef = useRef(null);

    const handleOpenBottomSheet = () => {
        if (bottomSheetRef.current) {
            //navigation.navigate('ScanQRScreen');
        }
    };

    const handleCloseBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.close();
            // navigation.navigate('UniqueID')

        }
    };

    return (
        <>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={['30%', '100%']}
            //isVisible={isVisible}
            //onClose={onClose}
            >
                <View style={{ padding: 16 }}>
                    <Text>Name: {personData.name}</Text>
                    <Text>Business Name: {personData.businessName}</Text>
                    <Text>Ratings: {personData.ratings}</Text>
                </View>
                <TouchableOpacity onPress={handleOpenBottomSheet}>
                    <Text>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCloseBottomSheet}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </BottomSheet>
        </>
    );
};

const PersonDetails = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const personData = {
        name: 'John Doe',
        businessName: 'XYZ Company',
        ratings: 4.5,
    };

    const handleBottomSheetClose = () => {
        setBottomSheetVisible(false);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <RatingsBottomSheet
                // isVisible={isBottomSheetVisible}
                // onClose={handleBottomSheetClose}
                personData={personData}
            />
        </GestureHandlerRootView>
    );
};

export default PersonDetails;
