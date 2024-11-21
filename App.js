import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Home } from "./pages/Home/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import imgBackground from "./assets/background.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  return (
    <ImageBackground
      source={imgBackground}
      style={s.imgBackground}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
