import { View, Text } from "react-native";
import React from "react";

// const MyCustomTextWith = ({ fName1, lName1, fName2, lName2 }) => {
//   return (
//     <View>
//       <Text>
//         Your First Name is {fName1}! and Last name is {lName1}
//       </Text>
//       <Text>
//         Your First Name is {fName2}! and Last name is {lName2}
//       </Text>
//     </View>
//   );
// };

const MyCustomTextWith1 = ({ fName1, lName1 }) => {
  return (
    <View>
      <Text>
        Your First Name is {fName1}! and Last name is {lName1}
      </Text>
    </View>
  );
};

const MyCustomTextWith2 = ({ fName2, lName2 }) => {
  return (
    <View>
      <Text>
        Your First Name is {fName2}! and Last name is {lName2}
      </Text>
    </View>
  );
};

const MyCustomTextWith = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     top: 50,
    //   }}
    // >
    //   <MyCustomTextWith
    //     fName1="Nattapon"
    //     lName1="Prombang"
    //     fName2="Pitchakorn"
    //     lName2="Vichanuwat"
    //   />
    // </View>

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyCustomTextWith1 fName1="Nattapon" lName1="Prombang" />
      <MyCustomTextWith2 fName2="Pitchakorn" lName2="Vichanuwat" />
    </View>
  );
};

export default MyCustomTextWith;
