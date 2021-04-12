import React, { Component, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Text,
  Form,
  Item as FormItem,
  Input,
  Label,
  Icon,
} from 'native-base';
import { Alert, StyleSheet, Button, View, Image, CheckBox } from 'react-native';
import { loginWithEmailAndPassword } from '../../data/userValidator';
import { HOME_TABS } from '../AppNavigation';

export default LoginScreen = () => {
  const navigation = useNavigation()

  const STORAGE_IS_USER_CONNECTED = "isConnected"

  //class states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [hidePassword, setHidePassword] = useState(true)

  const createErrorAlert = () =>
    Alert.alert(
      "Wrong input",
      "Check Email an Password",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const forgotPassAlert = () =>
    Alert.alert(
      "פנה אל המטה",
      "This is a test"
      [
      { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const toggleRememberMe = (value) => {
      this.setState({ rememberMe: value })
      if (value === true) {
        //user wants to be remembered.
        this.rememberUser();
      } else {
        this.forgetUser();
      }
  }

  rememberUser = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_IS_USER_CONNECTED, this.state.username);
    } catch (error) {
      // Error saving data
    }
  };

  getRememberedUser = async () => {
    try {
      const username = await AsyncStorage.getItem(STORAGE_IS_USER_CONNECTED);
      if (username !== null) {
        // We have username!!
        return username;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  forgetUser = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_IS_USER_CONNECTED);
    } catch (error) {
      // Error removing
    }
  };

  componentDidMount = async () => {
    const username = await this.getRememberedUser();
    this.setState({
      username: username || "",
      rememberMe: username ? true : false
    })
  };

  onLoginPressed = async () => {
    const loginSuccess = await loginWithEmailAndPassword(email, password)
    console.log("loginSuccess: " + loginSuccess);
    if (loginSuccess) {
      navigation.navigate(HOME_TABS)
    } else {
      createErrorAlert()
    }
  }

  return (
    <Container style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/l2HDwom.jpg' }} style={styles.tinyLogo} />
      <Form>
        <FormItem floatingLabel style={styles.FormItem}>
          <Label style={styles.label}>אימייל</Label>
          <Input style={styles.input} onChangeText={setEmail} />
        </FormItem>
        <FormItem floatingLabel style={styles.FormItem} last>
          <Label style={styles.label}>סיסמה</Label>
          <Input style={styles.input} onChangeText={setPassword} secureTextEntry={hidePassword} />
          <Icon name={'eye'} onPress={() => setHidePassword(!hidePassword)} style={styles.eyeIcon} />

        </FormItem>
        <View style={styles.button}>
          <Button onPress={onLoginPressed} title="התחבר למערכת" />
        </View>

      </Form>
      <View>
        {/* <Switch
            value={this.state.rememberMe}
            onValueChange={(value) => this.toggleRememberMe(value)}
            /> */}

        <View style={addItemStyles.wrapper}>
          <View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 0 }}>
                <Text style={{ justifyContent: 'flex-start', }} >זכור אותי</Text>
              </View>
              <View style={{ flex: 9 }}>
                {/* <Text style={{justifyContent: 'flex-end',}}              */}
                <CheckBox title='Click Here' style={{ justifyContent: 'flex-end' }} value={isSelected}
                  onValueChange={setIsSelected} />
              </View>
              <View style={{ flex: 6 }}>
                <Text style={{ justifyContent: 'flex-start', }} onPress={forgotPassAlert} >שכחתי סיסמה</Text>
              </View>
            </View>
          </View>
          {/* <Button onPress={forgotPassAlert} title="שכחתי סיסמה" style={{backgroundColor:'transparent'}}></Button> */}
        </View>

      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFFFFF',
  },
  label: {
    color: 'black',
    fontSize: 15,
  },
  FormItem: {
    marginVertical: 20,
    paddingVertical: 20
  },
  button: {
    alignItems: 'center',
    paddingBottom: 4,
    marginTop: 10,
    color: '#F0F8FF',
    width: '40%',
    alignSelf: 'center',
  },
  input: {
    borderColor: '#F0F8FF',
    height: 40,
    // margin: 20,
    borderWidth: 3,
  },
  eyeIcon: {
    marginLeft: -30,
    marginTop: 11,
    padding: 10
  },
  tinyLogo: {
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
});

const addItemStyles = StyleSheet.create({
  wrapper: {
    padding: 10,
    width: '100%',
    backgroundColor: '#FFFFFF'
  }
});