import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CardList from '../screens/cardList';

const data = [
  {
    image: require('../../images/charizard.jpg'),
    text: 'charizard',
    is_favorite: true,
    action: () => {},
  },
  {
    image: require('../../images/empoleon.jpg'),
    text: 'empoleon',
    is_favorite: false,
    action: () => {},
  },
  {
    image: require('../../images/groudon.jpg'),
    text: 'groudon',
    is_favorite: false,
    action: () => {},
  },
  {
    image: require('../../images/lugia.jpg'),
    text: 'lugia',
    is_favorite: true,
    action: () => {},
  },
  {
    image: require('../../images/salamence.jpg'),
    text: 'salamence',
    is_favorite: false,
    action: () => {},
  },
  {
    image: require('../../images/torterra.jpg'),
    text: 'toterra',
    is_favorite: true,
    action: () => {},
  },
];

storiesOf('CardList', module).add('default', () => <CardList data={data} />);
