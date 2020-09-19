import React, {Component} from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Text} from 'react-native';
import {HEADER_TEXT_BOLD_FONT} from '../styles/common';
const headerImage = require('../../assets/images/HomePageHeaderImage.jpg');
import ToolSearchBar from './ToolSearchBar';

export default class HomeScreenSearchSection extends Component {
  render() {
    return (
      <View>
        <View style={styles.homePageHeaderStyles}>
          <ImageBackground
            source={headerImage}
            style={{width: '100%', height: '100%'}}>
            <View style={{
              marginTop: '20%', alignItems: 'center', marginHorizontal: 10,}}>
              <ToolSearchBar
                placeholder="Search for tools"
                style={styles.searchBarStyles}
                placeholderTextColor="black"
              />
            </View>
            <Text style={styles.headerText}>Like Airbnb but for tools</Text>
            <Text style={styles.headerText}>And Equipment</Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  homePageHeaderStyles: {
    width: '100%',
    height: 250,
  },
  searchBarStyles: {
    height: 40,
    backgroundColor: 'white',
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 30,
  },
  headerText: {
    color: 'white',
    fontFamily: HEADER_TEXT_BOLD_FONT,
    fontSize: 25,
    width: 300,
    marginLeft: 15,
    marginTop: 2,
  },
})

