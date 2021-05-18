import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Item = ({ item, navigator }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigator.navigate("ScreenTwo", {movieID: item.imdbID})}>
        <Image resizeMethod="auto" resizeMode="contain" style={styles.posters} source={{uri: item.Poster}}/>
        <View style={{flex: 1}}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.year}>{item.Year}</Text>
        </View>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    item: {
        backgroundColor: '#353b48',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 4,
        marginHorizontal: 12,
        borderRadius: 25,
        flexDirection: 'row',
      },
      title: {
        fontSize: 28,
        color: '#54a0ff',
        paddingLeft: 5,
      },
      year: {
          fontSize: 22,
          color: '#54a0ff',
          paddingTop: 10,
          paddingLeft: 5,
      },
      posters: {
          width: 125,
          height: 175,
      },
  });

export default Item;