/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MapScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                MapScreen
            </Text>
            <Button
                title="Buton bas"
                onPress={() => alert('calisti')}

            />
        </View>
    );
};



export default MapScreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
});