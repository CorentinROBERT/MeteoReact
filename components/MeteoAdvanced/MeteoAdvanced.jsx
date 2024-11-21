import { View } from "react-native";
import {s} from "./MeteoAdvenced.style"
import { Txt } from "../Txt/Txt";

export function MeteoAdvenced({dusk,dawn,wind}){
    return( 
        <View style={s.container}>
            <View style={{alignItems:"center"}}>
                <Txt style={{fontSize:20}}>{dusk}</Txt>
                <Txt style={{fontSize:15}} >Aube</Txt>
            </View>
            <View style={{alignItems:"center"}}>
                <Txt style={{fontSize:20}}>{dawn}</Txt>
                <Txt style={{fontSize:15}}>Crépuscule</Txt>
            </View>
            <View style={{alignItems:"center"}}>
                <Txt style={{fontSize:20}}>{wind} km/h</Txt>
                <Txt style={{fontSize:15}}>Vent</Txt>
            </View>
        </View>
    );
}