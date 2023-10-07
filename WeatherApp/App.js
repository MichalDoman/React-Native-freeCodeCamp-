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
    const [weather, setWeather] = useState([])

    const fetchWeatherData = async() => {
        try {
            const response = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat={${location.coords.latitude}}&lon={${location.coords.longitude}}&appid={${WEATHER_API_KEY}}`
            )
            const data = await response.json()
            setWeather(data)
        } catch (error) {
            setError('Could not fetch weather.')
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        (async() => {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted'){
                setError('Permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
            await fetchWeatherData()
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