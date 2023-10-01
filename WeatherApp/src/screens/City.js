import React from "react";
import {SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View} from "react-native";
import IconText from "../component/IconText";

const City = () => {
    const {
        container,
        cityName,
        cityText, countryName,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText,
        imageLayout,
        rowLayout}
        = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city.jpg')}
                style={imageLayout}
            >
                <Text style={[cityText, cityName]}>Warsaw</Text>
                <Text style={[cityText, countryName]}>PL</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={8000} bodyTextStyle={populationText}/>
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName={'sunrise'}
                        iconColor={'white'}
                        bodyText={'10:46:58am'}
                        bodyTextStyle={riseSetText}/>
                    <IconText
                        iconName={'sunset'}
                        iconColor={'white'}
                        bodyText={'17:28:50pm'}
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