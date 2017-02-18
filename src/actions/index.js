import axios from 'axios';
const APIKEY = 'ec670c362818c9f1f077e158761b7a3d';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${APIKEY}&units=imperial`

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const GET_LOCATION = 'GET_LOCATION';

export function fetchWeather(city){
    const URL = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(URL);

    return{
        type:FETCH_WEATHER,
        payload:request
    };
}

export function getLocation(){
    const URL = 'https://ipinfo.io/json'
    const request = axios.get(URL);
    console.log('request',request)
    return{
        type:GET_LOCATION,
        payload:request
    };
}