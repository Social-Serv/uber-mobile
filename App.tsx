import React, { useEffect } from "react";
import { Navigation } from "react-native-navigation";
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Component from "./src/screens/LoginScreen";
import firebase from "firebase";
import firebaseActions from "./src/firebase/index";
import { firebaseConfig } from "./src/firebase/firebaseConfig";
import { TextField } from "react-native-ui-lib";

type Props = {
  componentId: string;
};

export default function App(props: Props) {
  useEffect(() => {
    // if (!firebase.app.name) firebase.initializeApp(firebaseConfig);
    //
    // firebaseActions.login("rostik270900@gmail.com", "password");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Uber Mobile</Text>
      <Button
        title={"Push Login Screen"}
        onPress={() => {
          console.log(props.componentId);
          Navigation.push("mainComponentId", {
            component: {
              name: "LoginScreen",
              options: {
                topBar: {
                  title: {
                    text: "Login Screen",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
