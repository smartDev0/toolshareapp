import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

import {
  onSearchSubmit,
  onToolSearchTermChange,
} from '../actions/toolSearchActions';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
class ToolSearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{width:'100%'}}>
        <TextInput
          placeholder={this.props.placeholder}
          value={this.props.searchTerm}
          style={this.props.style}
          placeholderTextColor={this.props.placeholderTextColor}
          onSubmitEditing={this.props.onSearchSubmit}
          onChangeText={this.props.onToolSearchTermChange}
        />
        <AntDesign name="search1"
          style={{
            position: 'absolute',
            marginTop: 10, marginLeft: 6
          }} size={20} color="black" />
      </View>

    );
  }
}
const mapStateToProps = state => {
  //console.log(state);
  return {
    searchTerm: state.toolSearch.searchTerm,
  };
};

export default connect(
  mapStateToProps,
  {onSearchSubmit, onToolSearchTermChange},
)(ToolSearchBar);
