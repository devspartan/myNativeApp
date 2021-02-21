import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import { defaultDataIdFromObject } from "@apollo/client";

const rootStack = {
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
};

const createStack = createDrawerNavigator(rootStack);

export default createAppContainer(createStack);
