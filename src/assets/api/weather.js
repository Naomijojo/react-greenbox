import axios from "axios";


export const weatherApi = {
  getWeather: async (city) => {
    const { data } = await axios.get("http://api.weatherstack.com/current", {
      params: {
        access_key: import.meta.env.VITE_WEATHER_API_KEY,
        query: city,
      },
    });
    return data
  },
};