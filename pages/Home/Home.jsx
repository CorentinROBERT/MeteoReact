
import { s } from "./Home.style"
import { Alert, Text, View } from "react-native";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location"
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";
import { Txt } from "../../components/Txt/Txt";
import { MeteBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { MeteoAdvenced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container/Container";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Home({}){

    const [coords,setCoords] = useState();
    const [weather,setWeather]= useState();
    const [city,setCity] = useState();
    const nav = useNavigation();
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
        const cityResponse = MeteoAPI.getCityFromCoords(coordinates);
        setCity(cityResponse);
    }

    async function fetchCoordsByCity(city){
        try {
            const coords = await MeteoAPI.getCityFromName(city);
            setCoords(coords);
        } catch (error) {
            Alert.alert("Oups",error);
        }
    }

    function goToForecastPage(){
        nav.navigate("Forecast",{city, ...weather.daily});
    }

    return (
        currentWeather?
        <>
        <Container>
            <View style={s.meteo}>
                <MeteBasic
                    onPress={goToForecastPage} 
                    interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
                    temperature={Math.round(currentWeather?.temperature)} 
                    city={city} />
            </View>
            <View style={s.searchbar}>
                <SearchBar onSubmit={fetchCoordsByCity} />
            </View>
            <View style={s.meteo_advanced}>
                <MeteoAdvenced
                    wind={currentWeather.windspeed}
                    dusk={weather.daily.sunrise[0].split("T")[1]}
                    dawn={weather.daily.sunset[0].split("T")[1]}
                />
            </View>
            </Container>
        </>
        :null
    );
}