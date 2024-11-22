import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  date: {
    fontSize: 20,
  },
  day: {
    fontSize: 20,
  },
  temperature: {
    width: 50,
    textAlign: "right",
  },
});
