import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';
import {Alert} from 'react-native';
import { loginWithEmailAndPassword } from '../../data/userValidator';

export default LoginScreen=()=> {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createErrorAlert = () =>
    Alert.alert(
      "Wrong input",
      "Check Email an Password",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    onLoginPressed=()=>{
        loginWithEmailAndPassword(email, password).then((success)=> {
            if (success){
                //move to next screen
                navigation.navigate('Home')
            } else {
                //show error
            }
        }).catch((e)=>{
            createErrorAlert()
        })
    }

    return (
      <Container>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={setEmail}/>
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} onChangeText={setPassword}/>
          </FormItem>
          <Button full primary style={{ paddingBottom: 4, marginTop: 10 }} onPress={onLoginPressed}>
            <Text> Login </Text>
          </Button>
          <Button full light primary style={{marginTop: 10}}><Text> Sign Up </Text></Button>
        </Form>
      </Container>
    );
}