import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

export default function Form({ addHandler }) {
    const [text, setText] = useState('')

    const onChange = (text) => {
        setText(text)
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу...'></TextInput>
            <Button color='green' onPress={() => addHandler(text)} title='Добавить задачу'></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});
