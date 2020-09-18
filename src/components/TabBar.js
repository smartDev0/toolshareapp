import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
const searchIcon = require('../../assets/images/Search.jpg');
const inboxIcon = require('../../assets/images/Inbox.jpg');
const postIcon = require('../../assets/images/Post.jpg');
const toolsIcon = require('../../assets/images/Tools.jpg');
const profileIcon = require('../../assets/images/Profile.jpg');

const TabBar = props => {
  return (
    <View
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopColor: 'grey',
        borderWidth: 1,
      }}>
      <Image source={searchIcon} style={styles.tabBarSectionImageStyle}></Image>
      <Image source={inboxIcon} style={styles.tabBarSectionImageStyle}></Image>
      <Image source={postIcon} style={styles.tabBarSectionImageStyle}></Image>
      <Image source={toolsIcon} style={styles.tabBarSectionImageStyle}></Image>
      <TouchableHighlight onPress={() => { alert('You tapped the button!'); }}>
        <Image
          source={profileIcon}
          style={styles.tabBarSectionImageStyle}
          >
        </Image>
      </TouchableHighlight>
    </View>
  );
};
const styles = {
  tabBarSectionImageStyle: {
    height: 50,
    width: 50,
  },
};

export default TabBar;
