import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import {movie} from '../mockData.js';
import Ready from '../Ready.js'
import NotReady from '../NotReady.js'
import {fetchMovie} from '../FetchData.js'

const Screen2 = props => {
    const [dataReceived, setDataReceived] = useState(false)
    const [movieInfo, setMovieInfo] = useState(null);
    const {movieID} = props.route.params;

    useEffect (() => {
        fetchMovie(value={setDataReceived, setMovieInfo, movieID})
        if(dataReceived) {
            props.navigation.setOptions({
                title: movieInfo.Title,
                headerStyle: {
                    backgroundColor: "#353b48",    
                },
                headerTintColor: "white"
            })
        }
        else {
            props.navigation.setOptions("Loading...")
        }
    }, [dataReceived])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    {dataReceived && <Ready movieInfo={movieInfo}/>}
                    {!dataReceived && <NotReady/>}
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222f3e',
      padding: 10,
      flexDirection: 'row',
    },
    posters: {
        width: 200,
        height: 350,
    },
    textStyle: {
        color: 'white',
    },
    titleStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
  });
  export default Screen2;