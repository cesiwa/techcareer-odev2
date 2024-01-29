import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SupplierScreen from "./screens/SupplierScreen";
import AddProductScreen from "./screens/AddProductScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AddProductScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "5%",
  },
});
