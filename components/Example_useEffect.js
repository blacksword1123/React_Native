import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Example_useEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //Fetch data from the API using axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respond) => {
        //Handle successfull response
        setData(respond.data);
      })
      .catch(() => {
        //Handle Error
        console.log("Error fetching data", error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts from API</Text>
      {data.map((post) => (
        <View key={post.id} style={styles.post}>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </View>
  );
};

export default Example_useEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  post: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
