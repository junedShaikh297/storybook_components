import React from 'react';
import {storiesOf} from '@storybook/react-native';
import TextInputContainer from '../components/textInput';
import {View} from 'react-native';

let value = '';

storiesOf('TextInputContainer', module)
  .addDecorator(getStory => (
    <View
      style={{
        flex: 1,
      }}>
      {getStory()}
    </View>
  ))
  .add('default', () => (
    <TextInputContainer
      label={'Story Component'}
      value={value}
      onChangeText={text => {
        console.log('text', text);
        value = text;
      }}
    />
  ));
