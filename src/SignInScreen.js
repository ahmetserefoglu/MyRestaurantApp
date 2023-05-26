import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  async function signIn() {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Dishes');

      console.log('User signed in!');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
}
