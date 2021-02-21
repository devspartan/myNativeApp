import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import Review from "../Screens/Review";
import Header from "./Header";
import About from "../Screens/About";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About" />,
        headerStyle: {
          backgroundColor: "orange",
          height: 48
        },
      };
    },
  },
};

const createStack = createStackNavigator(screens);

export default createStack;
