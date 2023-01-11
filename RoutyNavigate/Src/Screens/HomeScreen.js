/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                HomeScreen
            </Text>
            <Button
                title="Buton bas"
                onPress={() => alert('calisti')}

            />
        </View>
    );
};



export default HomeScreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
});