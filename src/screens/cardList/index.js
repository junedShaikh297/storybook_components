import React from 'react';
import {FlatList, View, Text} from 'react-native';
import CardItem from '../../components/card';

const CardList = props => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={props.data}
        renderItem={({item, index}) => {
            console.log(item);
            
          return <CardItem data={item} />;
        }}
      />
    </View>
  );
};

export default CardList;
