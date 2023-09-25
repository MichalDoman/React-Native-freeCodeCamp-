import React from 'react'
import {SafeAreaView, StyleSheet, Text, FlatList, View} from "react-native";
import {Feather} from '@expo/vector-icons'

const DATA = [
    {},
    {},
    {},
]

const Item = (props) => {
    const {dt_txt, min, max, condition} = props
    return (
        <View>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}
const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )
    return (
        <SafeAreaView>
            <Text>UpcomingWeather</Text>
            <FlatList
                data={DATA}
                renderItem={}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

export default UpcomingWeather
