import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import Review from "../Screens/Review";
import About from "../Screens/About";
import Header from "./Header";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home"/>,
        headerStyle: {
          backgroundColor: "orange",
          height: 48
        },
      };
    },
  },

  Review: {
    screen: Review,
  },
};

const createStack = createStackNavigator(screens);

export default createStack;
