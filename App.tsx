import React from "react";
import { Navigation } from "react-native-navigation";
import { AppRegistry, Button, StyleSheet, Text, View } from "react-native";
import Component from "./src/screens/LoginScreen";

type Props = {
  componentId: string;
};

export default function App(props: Props) {
  return (
    <View style={styles.container}>
      <Text>Uber Mobile</Text>
      <Button
        title={"Push Login Screen"}
        onPress={() => {
          console.log(props.componentId);
          Navigation.push(props.componentId, {
            component: {
              name: "LoginScreen",
              options: {
                topBar: {
                  title: {
                    text: "LoginScreen",
                  },
                },
              },
            },
          });
        }}
      />
    </View>
  );
}

Navigation.registerComponent("Home", () => require("./App").default);

Navigation.registerComponent(
  "LoginScreen",
  () => require("./src/screens/LoginScreen").default
);
AppRegistry.registerComponent("Home", () => App);
AppRegistry.registerComponent("LoginScreen", () => Component);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Home",
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
