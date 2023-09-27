import React from "react"
import {View, Text, SafeAreaView, StyleSheet} from "react-native"
import {Feather} from '@expo/vector-icons'

const CurrentWeather = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Feather name='sun' size={100} color='black'/>
                <Text>Current Weather</Text>
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High: 8</Text>
                    <Text style={styles.highLow}>Low: 6</Text>
                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description}>It's sunny</Text>
                <Text style={styles.message}>Perfect weather</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'red',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        justifyContent: 'center',
    },
    temp: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        color: 'black',
        fontSize: 30,
    },
    highLowWrapper: {
      flexDirection: 'row',
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {

    },
    message: {

    },
})
export default CurrentWeather