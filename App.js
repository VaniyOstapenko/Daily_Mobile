import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [listOfItems, setListOfItems] = useState([])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteHandlet = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View>
      <Header></Header>
      <Form addHandler={addHandler}></Form>
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <List el={item} deleteHandlet={deleteHandlet}></List>
        )}></FlatList>
      </View>
    </View>
  );
}