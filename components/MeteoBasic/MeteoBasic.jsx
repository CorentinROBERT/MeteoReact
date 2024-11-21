import { Clock } from "../Clock/Clock";
import { Txt } from "../Txt/Txt";
import {s} from "./MeteBasic.style"
import { Text,View,Image } from "react-native";

export function MeteBasic({temperature,city,interpretation}){
    return(
        <>
            <View style={s.clock}>
                <Clock/>
            </View>

            <Txt>{city}</Txt>

            <Txt style={s.weatherLabel} >{interpretation.label}</Txt>

            <View style={s.temperature_box} >
                <Txt style={s.temperature}>{temperature}°</Txt>
                <Image style={s.image} source={interpretation.image} />
            </View>
        </>
    );
}