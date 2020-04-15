import React from "react";
import { View } from "react-native";
import Card from "../components/card";

import { storiesOf } from "@storybook/react-native";



storiesOf('Card', module)
  .addDecorator(getStory => (
    <View style={{flex: 1, alignItems: 'center'}}>{getStory()}</View>
  ))
  .add('default', () => (
    <Card
      image={{
        uri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      }}
      text={'Charizard'}
      is_favorite={false}
      action={() => {
        console.log('clicked!');
      }}
    />
  ))
  .add('favorited', () => (
    <Card
      image={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}}
      text={'Lugia'}
      is_favorite={true}
      action={() => {
        console.log('clicked!');
      }}
    />
  ));