import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Text} from 'react-native';

const HeaderTitle = props => {
    return (
        <View>
            <View style={styles.container}>
                <TextInput style={styles.searchBox} placeholder="Enter Movie Title" placeholderTextColor="white" onChangeText={(text) => {props.updateInput(text)}}></TextInput>
                <View style={{flex: 1}}>{/* SPACER SO THAT INPUT BOX AND BUTTON HAVE SOME SPACE BETWEEN EACH OTHER */}</View> 
                <TouchableOpacity style={styles.button} onPress={() => {props.setSearchReady(true), props.setPage(1)}}>
                    <Text style={{color: 'white'}}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    searchBox: {
        flex: 26,
        backgroundColor: '#1e272e',
        borderRadius: 10,
        height: 35,
        color: 'white',
        paddingLeft: 5
    },
    button: {
        flex:8,
        borderRadius: 10,
        backgroundColor: '#1e272e',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default HeaderTitle