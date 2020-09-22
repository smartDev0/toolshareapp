import React from 'react';
import {View, Image, Text} from 'react-native';

const HomeScreenSection = props => {
  const {textStyle, imageStyle} = styles;

  return (
    <View>
      <Text style={textStyle}>{props.sectionText}</Text>
      <View style={{height: 120, width: '100%'}}>
        <Image style={imageStyle} source={props.sectionImage} />
      </View>
    </View>
  );
};

const styles = {
  textStyle: {
    marginTop: 10,
    marginBottom: 5,
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'cover',
  },
};

export default HomeScreenSection;
