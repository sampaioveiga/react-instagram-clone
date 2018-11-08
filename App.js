import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import CardList from './components/CardList';

const items = [
  { id: 0, author: 'Bob Ross' },
  { id: 1, author: 'Chuck Norris' },
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
