import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const NotReady = () => {
    return(
    <View style={styles.container}><Text style={styles.titleStyle}>Loading...</Text></View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e272e',
      padding: 10,
      flexDirection: 'row',
    },
    titleStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
  });

  export default NotReady