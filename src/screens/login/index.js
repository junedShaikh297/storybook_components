import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TextInputContainer from '../../components/textInput';
import Button from '../../components/customButton';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        paddingHorizontal: 25,
      }}>
      <TextInputContainer
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInputContainer
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <View style={{width:"100%",alignSelf:"center"}}>
        <Button
          toggleText="Login"
          color="skyblue"
          onPress={() => alert('Submitted.!')}
        />
      </View>
    </View>
  );
};

export default Login;
