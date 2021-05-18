import React  from 'react';
import { View,  Text, StyleSheet} from 'react-native';

const EmptySeach = () => {
    return(
      <View style={styles.blankSearch}><Text style={{color: 'white', fontSize: 36}}>No Results Found</Text></View>
    )
  }

  const styles = StyleSheet.create({
    blankSearch: {
      flex: 1,
      backgroundColor: '#1e272e',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    }
  });
export default EmptySeach