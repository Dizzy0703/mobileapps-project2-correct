import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";

const image = { uri: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg" };

const App = () => (
    <View style={StyleSheet.container}>
        <ImageBackground source={image} resizeMode="cover" style={StyleSheet.image}>
            <Text style={StyleSheet.Text}>CRM APP</Text>
            <Image source={require('../images/logo_example01.png')} />
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 35,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#c64c38'
    }
});

export default App;