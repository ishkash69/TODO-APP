//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import Routs from './src/Navigation/routes';

// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
<View style={styles.container}>
      <Routs/>
    </View>
    </SafeAreaView>
    
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
});

//make this component available to the app
export default App;
