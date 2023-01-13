import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
  Keyboard,
} from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { validateEmail } from '../utils/index';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [disabled, setDisabled] = React.useState(true);
  const [email, onChangeEmail] = React.useState('');
  const keyboard = useKeyboard();

  const emailValidation = (email) => {
    onChangeEmail(email);
    if (validateEmail(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/little-lemon-logo-grey.png')}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        placeholder={'Type your email'}
        value={email}
        onChangeText={(email) => emailValidation(email)}
        keyboardType={'email-address'}
        onSubmitEditing={Keyboard.dismiss}
      />
      <Pressable
        onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}
        style={[styles.button, disabled && styles.disabled]}
        disabled={disabled}>
        <Text style={styles.news}>Subscribe</Text>
      </Pressable>
    </ScrollView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },

  logo: {
    height: 120,
    width: 100,
    borderColor: 'black',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    paddingTop: 20,
    width: 250,
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
  input: {
    alignSelf: 'center',
    marginTop: 20,
    width: 250,
    height: 35,
    borderRadius: 5,
    borderWidth: 2,
    paddingLeft: 10,
    backgroundColor: '#EDEFEE',
  },
  button: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#44422C',
    width: 250,
    height: 35,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  news: {
    color: 'white',
    textAlign: 'center',
  },
});
