import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Diametr } from './src/Diametr';
import { Znach } from './src/Radius';

export default function App() {
  var state = {
    text: 'Введите значение радиуса или диаметра в соответствующее поле и нажмите кнопку!'
  }

  const diametr = title => {
    Alert.alert("Площадь окружности = " + String(parseFloat((Math.pow(title, 2)/4)*Math.PI)) + " кв.см")
  }

  const calc = title => {
    Alert.alert("Площадь окружности = " + String(parseFloat(Math.PI*Math.pow(title, 2))) + " кв.см")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Znach onSubmit={calc}/>
      <Diametr onSubmit={diametr} />
      <Text style={styles.container}>{state.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
