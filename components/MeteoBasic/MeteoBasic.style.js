import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },

  weatherLabel: {
    alignSelf: "flex-end",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    fontSize: 20,
  },

  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },

  image: {
    height: 90,
    width: 90,
  },

  temperature: {
    fontSize: 150,
  },
});
