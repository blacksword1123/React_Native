import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const IncreamentCounter = () => {
  const [age, setAge] = useState(23);

  const increment = () => {
    setAge((a) => a + 1);
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontStyle: "bold" }}>Your age: {age}</Text>
      <Text>{"\n\n"}</Text>
      <Button title="+3" onPress={() => setAge(age + 3)}/>
      {/* <Button title="+3" onPress={() => {for(let i=1;i<=3,i++){increment()}}} /> */}
      <Text>{"\n\n"}</Text>
      <Button
        title="+1"
        onPress={(age) => {
          increment(age);
        }}
      />
    </View>
  );
};

export default IncreamentCounter;

const styles = StyleSheet.create({});
