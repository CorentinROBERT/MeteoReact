import axios from "axios";

export class MeteoAPI {
  static async fetchWeatherFromCoords(coords) {
    try {
      return (
        await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
        )
      ).data;
    } catch (error) {
      console.log("Erreur ", error);
    }
  }

  static async getCityFromCoords(coords) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
    return city || village || town;
  }

  static async getCityFromName(name) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${name}&language=fr&count=1`
        )
      ).data.results[0];
      return { lat, lng };
    } catch (error) {
      throw "Pas de coodonnées trouvées pour la recherche : " + name;
    }
  }
}
