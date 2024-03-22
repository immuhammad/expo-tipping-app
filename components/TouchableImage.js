import React from 'react';
import { TouchableOpacity, Image, Linking } from 'react-native';

const TouchableImage = ({ source,source1,source2, url }) => {
  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={source} style={{ width: 40, height: 40,margin:5}} />
      <Image source={source1} style={{ width: 25, height: 25,left:45,alignItems:'center',bottom:10}} />
      <Image source={source2} style={{ width: 30, height: 30,}} />

    </TouchableOpacity>
  );
};

export default TouchableImage;
