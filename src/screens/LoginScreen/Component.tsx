import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Navigation } from "react-native-navigation";

export const Component = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to Uber</Text>
    </SafeAreaView>
  );
};

Navigation.registerComponent("LoginScreen", () => Component);
