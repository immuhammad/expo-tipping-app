import React from 'react';
import { Linking,TouchableOpacity,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons,MaterialIcons ,Octicons,MaterialCommunityIcons} from '@expo/vector-icons';
const OpenIconLink= ({ url, iconName,iconName1,iconName2,iconName3,iconName4,iconName5}) => {
    const handleOpenURL = async () => {
      try {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.error('Cannot open the given URL');
        }
      } catch (error) {
        console.error('An error occurred while opening the URL', error);
      }
    };
  
    return (
      <TouchableOpacity onPress={handleOpenURL} style={{padding:2,flexDirection:'row'}} >
        <Ionicons name={iconName} size={35} color='#4285F4' />
        <MaterialIcons name={iconName1} size={35} color='blue' />
        <FontAwesome name={iconName2} size={35} color='black' />
        <MaterialIcons name={iconName3} size={20} color='#FFE978' />
        <Octicons name={iconName4} size={24} color="#FFA26B" />
        <MaterialCommunityIcons name={iconName5} size={24} color="#499662"  />
      </TouchableOpacity>
    );
  };

export default OpenIconLink;


