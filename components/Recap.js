import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const Recap = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const checkTextInput = () => {
    if (!email.trim()) {
      alert("Please Enter Email");
    } else if (!pass.trim()) {
      alert("Please Enter Password");
    } else {
      alert("email: " + email + "\npassword: " + pass);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        value={pass}
        onChangeText={(value) => {
          setPass(value);
        }}
      />
      <Text>{"\n"}</Text>
      <Button
        title="Submit"
        style={styles.submitButton}
        onPress={checkTextInput}
      />
    </View>
  );
};

export default Recap;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
