import { s } from "./Txt.style"
import { Text, useWindowDimensions } from "react-native";

export function Txt({children,style}){
    const {height} = useWindowDimensions();
    const fontSize = style?.fontSize || s.text.fontSize;
    return( 
        <>
            <Text style={[s.text,style, , { fonSize: fontSize * 0.00114 * height}]}>{children}</Text>
        </>
    );
}