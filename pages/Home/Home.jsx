
import { s } from "./Home.style"
import { Text, View } from "react-native";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location"
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";
import { Txt } from "../../components/Txt/Txt";
import { MeteBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { MeteoAdvenced } from "../../components/MeteoAdvanced/MeteoAdvanced";

export function Home({}){

    const [coords,setCoords] = useState();
    const [weather,setWeather]= useState();
    const [city,setCity] = useState();
    const currentWeather = weather?.current_weather;

    useEffect(()=>{
        getUserCoords();
    },[]);

    useEffect(()=>{
        if(coords){
            fetchWeather(coords);
            fetchCity(coords);
        }
    },[coords]);

    async function getUserCoords(){
        let {status} =  await requestForegroundPermissionsAsync()
        if(status === "granted"){
            const location = await getCurrentPositionAsync();
            setCoords({
            lat:location.coords.latitude,
            lng:location.coords.longitude});
        }
        else{
            setCoords({lat:"48.85",lng:"2.35"});
        }
    }

    async function fetchWeather(coordinates){
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
        setWeather(weatherResponse);
    }

    async function fetchCity(coordinates){
        console.log("Coordinates : ",coordinates)
        const cityResponse = MeteoAPI.getCityFromCoords(coordinates);
        console.log("response : ",cityResponse)
        setCity(cityResponse);
    }

    return (
        currentWeather?
        <>
            <View style={s.meteo}>
                <MeteBasic 
                    interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
                    temperature={Math.round(currentWeather?.temperature)} 
                    city={city} />
            </View>
            <View style={s.searchbar}>
                
            </View>
            <View style={s.meteo_advanced}>
                <MeteoAdvenced
                    wind={currentWeather.windspeed}
                    dusk={weather.daily.sunrise[0].split("T")[1]}
                    dawn={weather.daily.sunset[0].split("T")[1]}
                />
            </View>
        </>
        :null
    );
}