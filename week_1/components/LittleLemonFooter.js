import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                All rights reserved by Little Lemon, 2022{' '}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#EE9972',
        marginBottom: 10,
    },
    footerText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        fontStyle: 'italic'
    },
});
