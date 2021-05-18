import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import Item from './Item.js';


const NotEmptySearch = (props) => {
    const renderItem = ({ item }) => (
        <Item item={item} navigator={props.navigation} />
    );
    const test = 1;
    return (
      <View style={styles.container}>
        <FlatList
        ref={props.flatlistRef}
        ListHeaderComponent={props.previous ? <TouchableOpacity style={styles.showMore} onPress={() => {props.setPage(props.page-1), props.setSearchReady(true)}}><Text style={styles.buttonText}>Previous Movies</Text></TouchableOpacity> : <View/>}
        data={props.moviesList.Search}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListFooterComponent={props.next ? <TouchableOpacity style={styles.showMore} onPress={() => {props.setPage(props.page+1), props.setSearchReady(true)}}><Text style={styles.buttonText}>More Movies</Text></TouchableOpacity> : <View/>}
        />
        <StatusBar style="auto" />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e272e',
    },
    showMore: {
      alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: '#353b48',
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginVertical: 4,
      marginHorizontal: 12,
      borderRadius: 25,
      flexDirection: 'row',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    }
  });

export default NotEmptySearch