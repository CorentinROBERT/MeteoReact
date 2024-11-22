import { s } from "./Container.style"
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import imgBackground from "./../../assets/background.png";

export function Container({children}){
    return(
        <>
            <ImageBackground
            source={imgBackground}
            style={s.imgBackground}
            imageStyle={s.img}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {children}
          </SafeAreaView>
          </SafeAreaProvider>
          </ImageBackground>
          
        </>
    );
}