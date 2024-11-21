import { s } from "./Txt.style"
import { Text } from "react-native";

export function Txt({children,style}){
return( 
<>
<Text style={[s.text,style]}>{children}</Text>
</>
);
}