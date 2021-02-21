import React, { useState } from "react";
import * as Font from "expo-font";
import { View, ImageBackground } from "react-native";
import AppLoading from "expo-app-loading";
import { ApolloProvider, useQuery, gql } from "@apollo/client";
import { apolloClient } from "./apollo";
import RootComponent from "./Screens/Home";
import HomeStack from "./stacks/HomeStack";
import RootStack from "./stacks/drawer";
// Imperial I-class Star Destroyer

const getFonts = () =>
  Font.loadAsync({
    "Montserrat-Medium": require("./assets/Montserrat/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("./assets/Montserrat/Montserrat-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <ApolloProvider client={apolloClient}>
        <View style={{ paddingTop: 30 }}></View>
        <RootStack />
      </ApolloProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={() => getFonts()}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => <Text>Error</Text>}
      />
    );
  }
}
