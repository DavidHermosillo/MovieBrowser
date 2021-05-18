import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Ready = (props) => {
    const list = []
    
    const displayKeys = () => {
        let i = 0;
        for(var key in props.movieInfo) {
            if(key !== "Response") {
                list.push(<Text key={i} style={styles.metadata}>{key} : {JSON.stringify(props.movieInfo[key])} </Text>)
                i++;
            }
        }
        return list;
    }

    return(
    <View style={styles.container}>
        <View style={styles.mainContent}>
            <Image resizeMethod="auto" resizeMode="contain" style={styles.posters} source={{uri: props.movieInfo.Poster}}/>
            <View style={{flex: 1, paddingLeft: 10}}>
                <Text style={styles.titleStyle}>{props.movieInfo.Title}</Text>
                <Text style={styles.yearStyle}>{props.movieInfo.Released} | {props.movieInfo.Rated}</Text>
                <Text style={styles.textStyle}>{props.movieInfo.Plot}</Text>
            </View>
        </View>
        <View style={styles.metadataContainer}>
            <Text style={styles.textStyle}>Director: {props.movieInfo.Director}</Text>
            <Text style={styles.textStyle}>Actors: {props.movieInfo.Actors}</Text>
            <Text style={styles.textStyle}>Genre: {props.movieInfo.Genre}</Text>
            <Text style={{paddingTop: 10}}>{displayKeys()}</Text>
        </View>
        <StatusBar style="auto" />
    </View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e272e',
      padding: 10,
    },
    mainContent: {
        flex: 2,
        backgroundColor: '#1e272e',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    metadataContainer: {
        flex: 3,
        backgroundColor: '#1e272e',
    },
    posters: {
        width: 200,
        height: 300,
    },
    textStyle: {
        color: 'white',
    },
    yearStyle: {
        color: 'white',
        fontStyle: 'italic',
    },
    titleStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    metadata: {
        color: 'white',
        fontSize: 11,
    },
  });
export default Ready