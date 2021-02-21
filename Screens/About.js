import React from "react";
import { View, Text, ImageBackground } from "react-native";

function About() {
  return (
    <ImageBackground 
    style={{ display: "flex", alignItems: "center", flex: 1 }}
    source={require("../assets/bg.png")}>
      <Text>About</Text>
    </ImageBackground>
  );
}

export default About;
