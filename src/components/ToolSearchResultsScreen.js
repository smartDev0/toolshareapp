import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {HEADER_TEXT_BOLD_FONT} from '../styles/common';
import ToolSearchBar from './ToolSearchBar';
import {connect} from 'react-redux';
const defaultSearchResultImage = require('../../assets/images/imgNotAvailable.jpg');

class ToolSearchResultsScreen extends Component {
  renderToolResults() {
    this.props.searchResults.map((item, key) => {
      <Text>item.item.name</Text>;
    });
  }

  render() {
    const {
      searchResultsSectionStyles,
      searchBarStyles,
      searchResultsItemsSectionStyles,
      searchResultHeaderText,
      searchResultsImageSection,
      searchResultItem,
      searchTermResultsText,
      searchResultsImage,
      toolPriceSection
    } = styles;
    return (
      <View style={searchResultsSectionStyles}>
        <ToolSearchBar
          placeholder="Search for tools"
          style={searchBarStyles}
          placeholderTextColor="grey"
        />
        <View style={searchResultsItemsSectionStyles}>
          <ScrollView>
            <Text style={searchTermResultsText}>Drills in Edmonton </Text>
            {this.props.searchResults.map(item => {
              // eslint-disable-next-line prettier/prettier
              let image =
                item.image == null
                  ? defaultSearchResultImage
                  : {uri: item.image};
              return (
                <View style={searchResultItem}>
                  <View style={searchResultsImageSection}>
                    <Image style={searchResultsImage} source={image} />
                    <View style={toolPriceSection}>
                      <Text>{'$' + item.item.price + '/ day'}</Text>
                    </View>
                  </View>
                  <Text style={searchResultHeaderText}>{item.item.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = {
  searchResultsSectionStyles: {
    width: '100%',
    marginTop: 35,
  },
  searchResultsItemsSectionStyles: {
    marginTop: 10,
  },
  searchBarStyles: {
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'grey',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: 'white',
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchResultHeaderText: {
    fontFamily: HEADER_TEXT_BOLD_FONT,
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
  },
  searchTermResultsText: {
    fontFamily: HEADER_TEXT_BOLD_FONT,
    fontSize: 20,
    marginLeft: 20,
    marginTop: 5,
  },
  searchResultsImageSection: {
    marginLeft: 20,
    marginRight: 20,
  },
  searchResultsImage: {
    width: '100%',
    height: 175,
  },
  searchResultItem: {
    marginTop: 7.5,
    marginBottom: 10,
  },
  toolPriceSection: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 8
  },
};

const mapStateToProps = state => {
  console.log(state);
  return {
    searchResults: state.toolSearch.searchResults,
  };
};

export default connect(mapStateToProps)(ToolSearchResultsScreen);
