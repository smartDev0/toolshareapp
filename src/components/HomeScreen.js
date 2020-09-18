import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  ScrollView,
  Image,
} from 'react-native';

import {Button} from 'react-native-elements';
import HomeScreenSection from './HomeScreenSection';
import TabBar from './TabBar';

const headerImage = require('../../assets/images/HomePageHeaderImage.jpg');
const howToolShareWorksSectionImage = require('../../assets/images/HowToolShareWorksSectionImage.png');
const handToolSectionImage = require('../../assets/images/HandToolsSectionImage.png');
const powerToolSectionImage = require('../../assets/images/PowerToolsSectionImage.png');
const ladderSectionImage = require('../../assets/images/LadderSectionImage.png');
const trailerSectionImage = require('../../assets/images/TrailersSectionImage.png');
const lenderSectionImage = require('../../assets/images/LenderSectionImage.png');

import HomeScreenSearchSection from './HomeScreenSearchSection';

export default class HomeScreen extends Component {
  render() {
    const {
      shortCutSectionStyle,
      shortCutButtonStyle,
      shortCutButtonTitleStyle,
      categorySectionsStyle,
    } = styles;

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <HomeScreenSearchSection />

            <View style={shortCutSectionStyle}>
              <Button
                title="Hand tools"
                type="outline"
                titleStyle={shortCutButtonTitleStyle}
                buttonStyle={shortCutButtonStyle}
              />
              <Button
                title="Power tools"
                type="outline"
                titleStyle={shortCutButtonTitleStyle}
                buttonStyle={shortCutButtonStyle}
              />
              <Button
                title="Ladders & Scaffolding"
                type="outline"
                titleStyle={shortCutButtonTitleStyle}
                buttonStyle={shortCutButtonStyle}
              />
              <Button
                title="Trailers"
                type="outline"
                titleStyle={shortCutButtonTitleStyle}
                buttonStyle={shortCutButtonStyle}
              />
            </View>
          </View>
          <View style={categorySectionsStyle}>
            <HomeScreenSection
              sectionText="How ToolShare Works"
              sectionImage={howToolShareWorksSectionImage}
            />
          </View>
          <View style={categorySectionsStyle}>
            <HomeScreenSection
              sectionText="Hand Tools"
              sectionImage={handToolSectionImage}
            />
          </View>
          <View style={categorySectionsStyle}>
            <HomeScreenSection
              sectionText="Power Tools"
              sectionImage={powerToolSectionImage}
            />
          </View>
          <View style={categorySectionsStyle}>
            <HomeScreenSection
              sectionText="Ladders & Scaffolding"
              sectionImage={ladderSectionImage}
            />
          </View>
          <View style={categorySectionsStyle}>
            <HomeScreenSection
              sectionText="Trailers"
              sectionImage={trailerSectionImage}
            />
          </View>
          <View style={categorySectionsStyle}>
            <HomeScreenSection
              sectionText="Earn Money Renting Tools on ToolShare"
              sectionImage={lenderSectionImage}
            />
          </View>
        </ScrollView>
        <TabBar />
      </View>
    );
  }
}

const styles = {
  shortCutSectionStyle: {
    flexDirection: 'row',
  },
  shortCutButtonStyle: {
    borderColor: '#6EA0BE',
    marginTop: 10,
    marginLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  shortCutButtonTitleStyle: {
    color: '#6EA0BE',
    fontSize: 10,
  },
  categorySectionsStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
};
