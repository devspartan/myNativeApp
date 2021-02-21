import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "../GloabalStyle";

function Review({ navigation }) {
  const { name, key } = navigation.state.params;
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={{ display: "flex", alignItems: "center", flex: 1 }}
    >
      <Text style={{ marginVertical: 20, fontSize: 22 }}>
        <Text style={styles.heading}>Key: </Text>
        {key}
      </Text>
      <Text style={styles.heading}>{name}</Text>
    </ImageBackground>
  );
}

export default Review;
