import React from 'react'
import {View, StyleSheet} from "react-native";
import CurrentWeather from "./src/component/CurrentWeather";
import UpcomingWeather from "./src/component/UpcomingWeather";

const App = () => {
    return(
        <View style={styles.container}>
            <CurrentWeather/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App
