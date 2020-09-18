import React, {Component} from 'react';
import {View, ImageBackground, TextInput, Text} from 'react-native';
import {HEADER_TEXT_BOLD_FONT} from '../styles/common';
const headerImage = require('../../assets/images/HomePageHeaderImage.jpg');
import ToolSearchBar from './ToolSearchBar';

export default class HomeScreenSearchSection extends Component {
  render() {
    const {homePageHeaderStyles, searchBarStyles, headerText} = styles;
    return (
      <View>
        <View style={homePageHeaderStyles}>
          <ImageBackground
            source={headerImage}
            style={{width: '100%', height: '100%'}}>
            <View style={{marginTop: '20%', alignItems: 'center'}}>
              <ToolSearchBar
                placeholder="Search for tools"
                style={searchBarStyles}
                placeholderTextColor="grey"
              />
            </View>
            <Text style={headerText}>Like Airbnb but for tools</Text>
            <Text style={headerText}>And Equipment</Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = {
  homePageHeaderStyles: {
    width: '100%',
    height: 250,
  },
  searchBarStyles: {
    height: 30,
    width: 350,
    backgroundColor: 'white',
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontFamily: HEADER_TEXT_BOLD_FONT,
    fontSize: 25,
    width: 300,
    marginLeft: 15,
    marginTop: 2,
  },
};
