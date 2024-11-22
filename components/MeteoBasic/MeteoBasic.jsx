import { Clock } from "../Clock/Clock";
import { Txt } from "../Txt/Txt";
import { s } from "./MeteoBasic.style"
import { Text,View,Image, TouchableOpacity } from "react-native";

export function MeteBasic({onPress,temperature,city,interpretation}){
    return(
        <>
            <View style={s.clock}>
                <Clock/>
            </View>

            <Txt>{city}</Txt>

            <Txt style={s.weatherLabel}>{interpretation.label}</Txt>

            <View style={s.temperature_box} >
                <TouchableOpacity onPress={onPress}><Txt style={s.temperature}>{temperature}°</Txt></TouchableOpacity>
                <Image style={s.image} source={interpretation.image} />
            </View>
        </>
    );
}