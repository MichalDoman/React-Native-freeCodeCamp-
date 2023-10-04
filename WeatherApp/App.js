import React, {useState} from 'react'
import {View, StyleSheet, ActivityIndicator} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/component/Tabs";

const App = () => {
    const [loading, setLoading] = useState(true)
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