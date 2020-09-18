import React, {Component} from 'react';
import {TextInput} from 'react-native';

import {
  onSearchSubmit,
  onToolSearchTermChange,
} from '../actions/toolSearchActions';
import {connect} from 'react-redux';

class ToolSearchBar extends Component {
  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        value={this.props.searchTerm}
        style={this.props.style}
        placeholderTextColor={this.props.placeholderTextColor}
        onSubmitEditing={this.props.onSearchSubmit}
        onChangeText={this.props.onToolSearchTermChange}
      />
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
