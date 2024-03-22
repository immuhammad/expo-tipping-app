import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Button, TouchableHighlight, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import TouchableImage from './../components/TouchableImage';
import TouchableIcons from './../components/TouchableIcons';
import CustomListItem from './../components/CustomeListItem';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const data = [
  {
    id: '1',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '2',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '3',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '4',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '5',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '6',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '7',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '8',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '9',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
  {
    id: '10',
    name: 'Name',
    business: 'Business Name ',
    amount: '7,000.00',
    ratings: 4.5,
    date: '02-02-2020',
    image: require('../img/template.png'),
  },
];
const Tab = createBottomTabNavigator();
const GiveTip = () => {
  return (

    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 30, }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>GiveTip</Text>
        </TouchableHighlight>
        {/* <View style={{ left: 50, flexDirection: 'row',alignSelf:'center'}}> */}
        <TouchableImage source1={require('../img/search.png')} />
        <TouchableImage source1={require('../img/menu.png')} />
        {/* </View> */}

      </View>
      <View style={{ flexDirection: 'row', }}>
        <Text style={styles.Text}>Last 3 months transactions</Text>
        <View style={{ left: 85, top: 10 }}>
          <TouchableIcons iconName5={"dots-vertical"} />
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CustomListItem item={item} />}
      />
    </View>
  )
};
function MessageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Messages"
        onPress={() => navigation.navigate('Message')}
      />
    </View>
  );
}

const QRCodeScanScreen = ({ navigation }) => {
  navigation.navigate("GiveTip")
  const [firstTimeLogin, setFirstTimeLogin] = useState(true);
  const [showQRModal, setShowQRModal] = useState(false);

  const toggleQRModal = () => {
    setShowQRModal(!showQRModal);
    
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal visible={firstTimeLogin} animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.text}>A password reset link has been sent to your registered email.</Text>
            <TouchableOpacity onPress={() => setFirstTimeLogin(false)} >
              
              <Text style={styles.button1}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={toggleQRModal}>
        <Text>Text</Text>
      </TouchableOpacity>
      <Modal 
       transparent={true} visible={showQRModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../img/QR.png')} style={{ width: 100, height: 100 }} />
            <Image source={require('../img/QR.png')} style={{ width: 100, height: 100 }} />
            <TouchableOpacity onPress={() => setShowQRModal(false)}>
              <Text style={styles.button1}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
     
    </View>
  );
};


function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title="Notifications"
        onPress={() => navigation.navigate('Notification')}
      />
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title="Account Setting"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
}


//BottomTabNavigation

export default function TabScreen() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 90,
          backgroundColor: '#FFFFFF',
          paddingLeft: 10,
          paddingRight: 10,
          ...styles.shadow,
          elevation: 0,
          tab: {
            activeTintColor: '#499662',
            inactiveTintColor: '#A4CBB1',
          }
        },
      }}>
      <Tab.Screen name="Home" component={GiveTip}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: (focused) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20 }}>
              <MaterialCommunityIcons name="home-thermometer" size={25} color={"#499662"}
                style={{ tintColor: focused ? '#499662' : '#A4CBB1', }} />
              <Text style={{ fontSize: 12, color: focused ? '#499662' : '#A4CBB1', }}>Home</Text>
            </View>
          )
        }} />
      <Tab.Screen name="Message" component={MessageScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (focused) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20 }}>
              <AntDesign name="message1" size={25} color={"#499662"}
                style={{ tintColor: focused ? '#499662' : '#A4CBB1', }} />
              <Text style={{ fontSize: 12, color: focused ? '#499662' : '#A4CBB1', }}>Message</Text>
            </View>
          )
        }} />
      <Tab.Screen name="QRCode" component={QRCodeScanScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20, marginTop: -60 }}>
              <Image
                source={require('../img/QR.png')}
                resizeMode='contain'
                style={{ height: 100, width: 100 }} />
            </View>
          )
        }}
      />

      <Tab.Screen name="Notifications " component={NotificationsScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: (focused) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20 }}>
            <Ionicons name="notifications-outline" size={25} color={"#499662"}
              style={{ tintColor: focused ? '#499662' : '#A4CBB1', }} />
            <Text style={{ fontSize: 12, color: focused ? '#499662' : '', }}>Notification</Text>
          </View>
        )
      }} />
      <Tab.Screen name=" Account" component={AccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (focused) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20 }}>
              <MaterialCommunityIcons name="account-outline" size={25} color={"#499662"}
                style={{ tintColor: focused ? '#499662' : '#A4CBB1', }} />
              <Text style={{ fontSize: 12, color: focused ? '#499662' : '#A4CBB1', }}>My Account</Text>
            </View>
          )
        }} />
    </Tab.Navigator>

  );
}

//Styles for the GiveTip
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 220,
    backgroundColor: '#499662',
    marginTop: 20,
    left: 10,
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
  Text: {
    fontSize: 20,
    color: '#499662',
    alignSelf: 'center',
    fontWeight: 'bold',
    left: 10,
  },
  shadow: {
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000B2',
  },
  modalContent: {
    width: 330,
    padding: 20,
    backgroundColor: '#FFFFFF00',
    // backgroundColor:'green',
    alignItems: 'center',
    height: 190,
    // top: 330,
    //left: 23,
    padding: 32,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderBlockColor: '#FFFFFF14',

  },
  text: {
    width: 264,
    height: 90,
    // fontStyle:'italic',
    fontSize: 20,
    //lineheight: 30,
    color: 'white',
    // fontFamily:'Arial',
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 5,

    //borderBottomColor:'white',
    textAlign: 'center',
  },
  button1: {
    width: 328,
    height: 61,
    padding: 15,
    backgroundColor: '#499662',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    //borderRadius:10,
    color: 'white',
    borderStartWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    //borderBlockColor:'white',
    borderWidth: 1,
    borderColor: 'white',
  }
});