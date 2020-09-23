import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const searchIcon = require('../../assets/images/Search.jpg');
const inboxIcon = require('../../assets/images/Inbox.jpg');
const postIcon = require('../../assets/images/Post.jpg');
const toolsIcon = require('../../assets/images/Tools.jpg');
const profileIcon = require('../../assets/images/Profile.jpg');

const TabBar = ({props}) => {
  const goHome = () => {
    console.log(props);
    props.navigation.navigate('HomeScreen');
  }
  return (
    <View
      style={{
        paddingTop:6,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopColor: 'grey',
        borderWidth: 1,
      }}>
      <TouchableHighlight
        onPress={() => goHome() }>
          <View style={styles.tabBarSectionImageStyle}>
              <AntDesign name="search1" style={{ textAlign: 'center' }} size={20} color="grey" />
              <Text style={{fontSize: 10}}>
                Search
              </Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.tabBarSectionImageStyle}>
          <Fontisto name="email" style={{ textAlign: 'center' }} size={20} color="grey" />
          <Text style={{ fontSize: 10 }}>
            Inbox
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('ListingToolScreen')}>
        <View style={styles.tabBarSectionImageStyle}>
          <Feather name="plus-square" style={{ textAlign: 'center' }} size={21} color="grey" />
          <Text style={{ fontSize: 10 }}>
            Post
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate('ToolBoxScreen')}>
        <View style={styles.tabBarSectionImageStyle}>
          <FontAwesome name="briefcase" style={{ textAlign: 'center' }} size={21} color="grey" />
          <Text style={{ fontSize: 10 }}>
            Tools
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate('ProfileScreen')}>
        <View style={styles.tabBarSectionImageStyle}>
          <Entypo name="user" style={{ textAlign: 'center' }} size={21} color="grey" />
          <Text style={{ fontSize: 10 }}>
            Profile
          </Text>
        </View>
      </TouchableHighlight>
      {/* <Image source={searchIcon} style={styles.tabBarSectionImageStyle}></Image>
      <Image source={inboxIcon} style={styles.tabBarSectionImageStyle}></Image>
      <Image source={postIcon} style={styles.tabBarSectionImageStyle}></Image>
      <Image source={toolsIcon} style={styles.tabBarSectionImageStyle}></Image>
      <TouchableHighlight onPress={() => { alert('You tapped the button!'); }}>
        <Image
          source={profileIcon}
          style={styles.tabBarSectionImageStyle}
          >
        </Image>
      </TouchableHighlight> */}
    </View>
  );
};
const styles = {
  tabBarSectionImageStyle: {
    // height: 50,
    // width: 50,
  },
};

export default TabBar;
