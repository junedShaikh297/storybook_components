import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';

const CustomButton = ({toggleText, color, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: color}]}>
      <Text style={{fontSize: 16, color: '#fff'}}>{toggleText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
};

CustomButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CustomButton;
