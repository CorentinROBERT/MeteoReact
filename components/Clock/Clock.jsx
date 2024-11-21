import { getNowToHHMM } from "../../services/date-service";
import { s } from "./Clock.style"
import { Text } from "react-native";
import { Txt } from "../Txt/Txt";
import { useEffect, useState } from "react";

export function Clock(){
    const [time,setTime]= useState(getNowToHHMM());

    useEffect(()=>{
             const interval = setInterval(()=>{
                setTime(getNowToHHMM())
            },1000);

            return ()=>{
            clearInterval(interval);
        }
        },[]
    );

return( 
<>
<Txt style={s.time}>{time}</Txt>
</>
);
}