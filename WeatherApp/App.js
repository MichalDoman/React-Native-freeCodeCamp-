import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ActivityIndicator} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/component/Tabs";
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'

const App = () => {
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async() => {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted'){
                setError('Permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    })

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={'blue'}/>
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})

export default App