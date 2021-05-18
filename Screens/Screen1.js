import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {search} from '../mockData.js';
import HeaderTitle from '../HeaderTitle.js';
import EmptySeach from '../EmptySearch.js'
import NotEmptySearch from '../NotEmptySearch.js'
import {fetchSearch} from '../FetchData.js'

const Screen1 = props => {
    const [input, setInput] = useState('');
    const [searchReady, setSearchReady] = useState(false);
    const [moviesList, setMoviesList] = useState(search);
    const [emptySearch, setEmptySearch] = useState(false);
    const [dataReceived, setDataReceived] = useState(false);
    const [headerSet, setHeader] = useState(false);
    const [page, setPage] = useState(1);
    const [previous, setPrevious] = useState(false);
    const [next, setNext] = useState(false);
    const [mockDataUsed, setMockDataUsed] = useState(false);
    const flatlistRef = useRef();

    useEffect(() => {
      if(searchReady) {
        fetchSearch(value={input, page, setMoviesList, setEmptySearch, setDataReceived, setSearchReady});
        if(!mockDataUsed) {
          setMockDataUsed(true);
        }
      }
      if(!headerSet) {
        props.navigation.setOptions({
          headerTitle: () => (
            <HeaderTitle updateInput={setInput} setSearchReady={setSearchReady} setPage={setPage}/>
          ),
          headerStyle: {
            backgroundColor: '#353b48'
          }
        })
        setHeader(true);
      }
      if(!mockDataUsed || moviesList.totalResults < page*10) {
        setNext(false)
      }
      else {
        setNext(true)
      }
      if(page === 1) {
        setPrevious(false)
      }
      else {
        setPrevious(true)
      }
      onPressFunction();
    },[searchReady, dataReceived, page])

    const onPressFunction = () => {
      if(!emptySearch) {
        flatlistRef.current.scrollToIndex({index: 0});
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
          <View style={{flex:1}}>
            {!emptySearch && <NotEmptySearch moviesList={moviesList} navigation={props.navigation} page={page} setPage={setPage} previous={previous} next={next} setSearchReady={setSearchReady} flatlistRef={flatlistRef}/>}
            {emptySearch && <EmptySeach/>}
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222f3e',
    },
  });

  export default Screen1;