import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '26445f187952cd91e9b1f57979d8bbdc';

export const fetchWeather = async(query) => {

    const {data} = await axios.get(URL,{
    params:{
        q: query,
        units: 'metric',
        APPID: API_KEY,
        }
    });
    //console.log(data)
return data;
}
