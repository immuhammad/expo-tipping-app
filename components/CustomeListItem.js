import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TouchableIcons from './TouchableIcons';

const CustomListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.starIcon}><TouchableIcons iconName3="star" /></Text>
          <Text style={styles.ratings}>{item.ratings}</Text>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.business}> {item.business}</Text>
          <Text style={styles.date}> {item.date}</Text>
        </View>
      </View>
    </View>
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
    amount: {
      fontSize: 18,
      color: '#499662',
      left: 60,
      fontWeight: 'bold',
    },
    date: {
      fontSize: 16,
      color: '#499662',
      left: 60,
      marginBottom: 30,
    },
  
  });
  export default CustomListItem;