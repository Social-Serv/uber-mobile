import React from "react";
import { Navigation } from "react-native-navigation";
import { Button, StyleSheet, Text, View } from "react-native";

type Props = {
  componentId: string;
};

export default function App(props: Props) {
  return (
    <View style={styles.container}>
      <Text>Uber Mobile</Text>
      <Button
        title={"Push Login Screen"}
        onPress={() =>
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
          })
        }
      />
    </View>
  );
}

Navigation.registerComponent("Home", () => App);

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
