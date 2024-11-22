import { Txt } from "../../components/Txt/Txt";
import {s} from "./Forecast.style"
import { Container } from "../../components/Container/Container";
import { useNavigation, useRoute} from "@react-navigation/native";
import { TouchableOpacity,View } from "react-native";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListitem";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { dateToDDMMMYYYY, DAYS } from "../../services/date-service";

export function Forecast({}){

    const {params} = useRoute();
    const nav = useNavigation();

    const backButton =(
        <TouchableOpacity style={s.backButton} onPress={()=> nav.goBack()}>
            <Txt>{"<"}</Txt>
        </TouchableOpacity>
    );

    const header = (
        <View style={s.header}>
            {backButton}
            <View style={s.headerTexts}>
                <Txt>{params.city}</Txt>
                <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
            </View>
        </View>
    );

    const forecastList = (
        <View style={s.forecastList}>
            {
                params.time.map((time,index)=>{
                    const code = params.weathercode[index];
                    const image = getWeatherInterpretation(code).image;
                    const date = new Date(time)
                    const day = DAYS[date.getDay()]
                    const d = dateToDDMMMYYYY(date);
                    const temperature = params.temperature_2m_max[index]
                    return <ForecastListItem 
                        key={time}
                        image={image}
                        day={day}
                        date={d}
                        temperature={temperature.toFixed(0)}
                         />
                })
            }
        </View>
    );

    return(
        <>
            <Container>
                {header}
                <View style={{marginTop:50}}>
                    {forecastList}
                </View>
            </Container>
        </>
    );
}