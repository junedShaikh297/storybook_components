import React from 'react';
import {View} from 'react-native';
import CustomButton from '../components/customButton';
import {storiesOf} from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

storiesOf('CustomButton', module)
  .addDecorator(getStory => (
    <View style={{flex: 1, alignItems: 'center'}}>{getStory()}</View>
  ))
  .add('on', () => (
    <CustomButton
      toggleText={'like'}
      color={'green'}
      onPress={() => action('clicked!')}
    />
  ))
  .add('off', () => (
    <CustomButton
      toggleText={'dislike'}
      color={'red'}
      onPress={() => action('clicked!')}
    />
  ));
