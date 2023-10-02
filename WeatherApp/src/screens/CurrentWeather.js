import React from "react"
import {View, Text, SafeAreaView, StyleSheet} from "react-native"
import {Feather} from '@expo/vector-icons'
import RowText from "../component/RowText";

const CurrentWeather = () => {
    const {
        wrapper,
        container,
        temp,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message
    } = styles
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name='sun' size={100} color='black'/>
                <Text>Current Weather</Text>
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText
                    messageOne={'High: 8'}
                    messageTwo={'Low: 6'}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
            </View>
            <RowText
                messageOne={'It\'s sunny'}
                messageTow={'Perfect weather'}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />
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