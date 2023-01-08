import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>Welcome to Little Lemon</Text>

            <Text style={styles.paragraph}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    title: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 18,
        padding: 20,
        color: '#EDEFEE',
        textAlign: 'center',
    },
});
