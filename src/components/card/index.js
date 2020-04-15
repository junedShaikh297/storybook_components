import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import IconButton from '../customButton';

const {width, height} = Dimensions.get('window');

const Card = ({data: {image, text, is_favorite, action}}) => {
  console.log('text', text);

  const icon = is_favorite ? 'like' : 'dislike';
  const color = is_favorite ? 'green' : 'red';
  return (
    <View style={styles.container}>
      <Image
        source={image}
        resizeMode={'contain'}
        style={styles.image}
      />
      <Text style={styles.text}>{text}</Text>
      <IconButton toggleText={icon} color={color} onPress={action} />
    </View>
  );
};

const styles = {
  container: {
    width: width,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: width,
    height: 250,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

Card.propTypes = {
  image: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  is_favorite: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default Card;
