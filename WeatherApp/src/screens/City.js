import React from "react";
import {SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar} from "react-native";

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/city.jpg')}
                style={styles.imageLayout}
            >
                <Text>City</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    }
})
export default City