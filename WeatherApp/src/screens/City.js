import React from "react";
import {SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View} from "react-native";
import moment from "moment";
import IconText from "../components/IconText";

const City = ({weatherData}) => {
    const {
        container,
        cityName,
        cityText, countryName,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText,
        imageLayout,
        rowLayout
    }
        = styles
    const {name, country, population, sunrise, sunset} = weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city.jpg')}
                style={imageLayout}
            >
                <Text style={[cityText, cityName]}>{name}</Text>
                <Text style={[cityText, countryName]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconColor={'red'}
                        bodyText={`Population: ${population}`}
                        bodyTextStyle={populationText}/>
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName={'sunrise'}
                        iconColor={'white'}
                        bodyText={moment(sunrise).format('h:mm:ss a')}
                        bodyTextStyle={riseSetText}/>
                    <IconText
                        iconName={'sunset'}
                        iconColor={'white'}
                        bodyText={moment(sunset).format('h:mm:ss a')}
                        bodyTextStyle={riseSetText}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    imageLayout: {
        flex: 1,
    },
    populationWrapper: {
        alignItems: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
export default City