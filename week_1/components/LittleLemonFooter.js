import { Text, View } from 'react-native';
import React from 'react';

const LittleLemonFooter = () => {
    return (
        <View style={{
            backgroundColor: '#F4CE14',
            marginBottom: 10
        }}>
            <Text
                style={{
                    fontSize: 19,
                    color: 'black',
                    textAlign: 'auto',
                }}>
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    )
}

export default LittleLemonFooter;
