import { View, Text } from "react-native";
import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Material from "./facilitator/Materials";
import { Slot } from "expo-router";
import Equipment from "./facilitator/Equipment";
import Report from "./facilitator/Report";
import Layout from "./facilitator/Layout";
import "../global.css";

export default function Main() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "yellow",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Layout />
      {/* <Equipment /> */}
      {/* <Report /> */}
    </PaperProvider>
  );
}
