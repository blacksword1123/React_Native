import {StyleSheet, View, Text, Button } from "react-native";
import React from 'react'

const ThirdPage = ({ navigation }) => {
  return (
    <View style={[styles.container,styles.textStyle]}>
      <Text>This is Third Page of the App</Text>
      <Text>{"\n"}</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack("Second")}
      />
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate("Second")}
      />
      <Button
        title="Reset navigator to first page"
        onPress={() => navigation.navigate("First")}
      />
    </View>
  )
}

export default ThirdPage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
      fontSize: 25,
      textAlign: "center",
      marginBottom: 16,
    },
  });