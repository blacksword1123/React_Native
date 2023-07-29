import { StyleSheet, Text, View } from "react-native";
import Counter from "./components/Counter";
import MyInput from "./components/MyInput";
import IncrementCounter from "./components/IncrementCounter";
import Form from "./components/Form";
import Login from "./components/Login";
import Recap from "./components/Recap";
import DefineStyle from "./components/DefineStyle";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <ViewBoxesWithColorAndText /> */}
    //   <DisplayandImage/>
    // </View>

    // <View style={styles.container}>
    //   <Counter/>
    // </View>

    // <View style={styles.container}>
    //   <MyInput/>
    // </View>

    // <View style={styles.container}>
    //   <Login />
    // </View>

    <View style={{flex: 1}}>
      <Recap/>
    </View>

    // <View style={styles.container}>
    //   <DefineStyle/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
