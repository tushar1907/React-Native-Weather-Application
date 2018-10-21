import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    isLoading: "Tushar"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.isLoading} Gupta is my name</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});