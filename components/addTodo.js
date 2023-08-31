import React, {useState} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({submitHandler}) {
    
    const [texte, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    const pressHandler = () =>{
        submitHandler(texte);
        setText('');
    };

    return (
        <View>
            <TextInput
             style ={styles.input}
             placeholder='new todo...'
             onChangeText={changeHandler}
             value={texte}
            />
            <Button 
            color='coral' 
            onPress={pressHandler}
            title='add todo'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
});