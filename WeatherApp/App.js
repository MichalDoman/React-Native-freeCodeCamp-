import React from "react"
import {View, Text, SafeAreaView, StyleSheet} from "react-native"

const App = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
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
    },
    container: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
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
    },
    description: {

    },
    message: {

    },
})
export default App