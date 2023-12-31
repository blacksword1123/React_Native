import {StyleSheet, View, Text, Button } from "react-native";
import React from 'react'

const SecondPage = ({ navigation }) => {
  return (
    <View style={[styles.container,styles.textStyle]}>
      <Text>This is Second Page of the App</Text>
      <Text>{"\n"}</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack("First Page")}
      />
      <Text>{"\n"}</Text>
      <Button disabled
        title="Go to SecondPage... AGAIN"
        onPress={() => navigation.push("Second Page")}
      />
      <Text>{"\n"}</Text>
      <Button
        title="Go to First Page"
        onPress={() => navigation.navigate("First Page")}
      />
      <Text>{"\n"}</Text>
      <Button disabled
        title="Go to Third Page"
        onPress={() => navigation.navigate("Third")}
      />
    </View>
  )
}

export default SecondPage

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