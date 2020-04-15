import React from 'react';
import {View, Text, TextInput} from 'react-native';

const TextInputContainer = props => {
  return (
    <View style={{marginBottom: 15}}>
      <Text style={{marginBottom: 10, color:"#000"}}>{props.label}</Text>
      <TextInput
        {...props}
        value={props.value}
        placeholder={props.placeholder}
        numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
        style={{
          color:"#000",
          width: '100%',
          textAlignVertical:props.textAlignVertical ? props.textAlignVertical :"center",
          height: props.height ? props.height : 45,
          paddingLeft: 15,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor={"#000"}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default TextInputContainer;
