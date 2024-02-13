import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Open up App.js to start working on your app lol testing!
      </Text>
      <Button style={styles.buttonStyle} title="Press Me!" />
      <StatusBar style="auto" />
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
  textStyle: {
    color: "#000",
  },
  buttonStyle: {
    backgroundColor: "blue",
    borderRadius: 5,
  },
});
