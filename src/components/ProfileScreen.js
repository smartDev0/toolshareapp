import React, {Component} from 'react';
import {View, ImageBackground, Image, Text} from 'react-native';
const logInBackgroundImage = require('../../assets/images/LogInBackground2.png');
const toolShareLogo = require('../../assets/images/ToolShareLogo.png');
import FullScreenButton from './FullScreenButton';
import {onLoginSubmit} from '../actions/loginAction';
export default class ProfileScreen extends Component {
  render() {
    onLoginSubmit('lee@toolshare.co', 'pass1234');
    console.log("IN");
    return (
      <View
        style={{
          display: 'flex',
          /*alignItems:'flex-end',*/ width: '100%',
          height: '100%',
        }}>
        <ImageBackground
          source={logInBackgroundImage}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Image style={{width: 300, height: 300}} source={toolShareLogo} />
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 36}}>
            <Text>Connect, Share, Build and Repair</Text>
            <FullScreenButton />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
