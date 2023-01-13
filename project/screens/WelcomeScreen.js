import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/little-lemon-logo.png')}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Little Lemon, Your local mediterranean Bistro
        </Text>
      </View>
      <View style={styles.newsletter}>
        <Pressable
          onPress={() => navigation.navigate('Subscribe')}
          style={styles.button}>
          <Text style={styles.news}>Newsletter</Text>
        </Pressable>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 170,
    width: 150,
  },
  text: {
    paddingTop: 20,
    width: 240,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 60,
    backgroundColor: '#44422C',
    width: 240,
    height: 35,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  newsletter: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  news: {
    color: 'white',
    textAlign: 'center',
  },
});
