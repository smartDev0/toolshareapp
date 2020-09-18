import React from 'react';
import {Button, Alert} from 'react-native';

const FullScreenButton = props => {
  return (
    <Button
      title="Press me"
      color="#f194ff"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
  );
};

export default FullScreenButton;
