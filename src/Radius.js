import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const Znach = ({onSubmit}) => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
        if(value.trim()) {
            if (isNaN(value)){
                Alert.alert('Введено не числовое значение!')
            } else{
                onSubmit(value);
                setValue("")
            }
        } else {
            Alert.alert('Поле ввода пустое!')
        }
    };

    return(
        <View>
            <View style={styles.block}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setValue}
                    value={value}
                    placeholder="Радиус" />
                <Button title="Высчитать" color="orange" onPress={pressHandler} />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: "15%"
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'orange'
    }
});