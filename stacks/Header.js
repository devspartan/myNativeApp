import React, { useState } from "react";
import * as Font from "expo-font";
import { View, Text } from "react-native";
import { styles } from "../GloabalStyle";
import { MaterialIcons } from "@expo/vector-icons";

function Header({navigation, title}) {
  console.log(navigation, "props");

  const handlePress = () => {
      navigation.openDrawer()
    console.log("press habdle");
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <MaterialIcons
        onPress={handlePress}
        name="menu"
        size={32}
        color="white"
      />
      <Text style={{...styles.headerText, marginLeft: 8}}>{title}</Text>
    </View>
  );
}

export default Header;
