import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Header from './components/header';
import AddTodo from './components/addTodo';
import TodoItem from './components/todoItem';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffe', key:'1'},
    { text: 'take a break', key:'2'},
    { text: 'work', key:'3'}
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return  prevTodos.filter(todo => todo.key !=key);
    })
  };

  const submitResult = (texte) => {
    setTodos(prevTodos => {
      return [
        { texte, key: Math.random().toString()},
        ...prevTodos
        ];
    });
  }

  const submitHandler = (text) => {
    if( text.length > 3 ){
      //return submitResult(texte);
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
       Alert.alert('OOPS', 'Todo must be over 3 characters long',[
          {texte: 'Understood', onPress:() => console.log('alert closed')}
       ]);
    }
  }

  return (
    <TouchableNativeFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo  submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40,
  },
  list:{
    marginTop: 20,
  },
});
