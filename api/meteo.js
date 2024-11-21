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
    console.log(
      `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lng}`
    );
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
    return city || village || town;
  }
}
