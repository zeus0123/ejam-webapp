import { FETCH_WEATHER, FETCH_WEATHER_DETAIL } from "./type";
import { WeatherList } from "../interfaces/weatherList";
import { WeatherDataDetail } from "../interfaces/weatherDetail";


export interface FetchWeatherAction{
    type : typeof FETCH_WEATHER,
    weatherData : WeatherList[]
}

export interface FetchWeatherDetailAction {
    type : typeof FETCH_WEATHER_DETAIL,
    weather : WeatherDataDetail
}

export type WeatherActionTypes = FetchWeatherAction | FetchWeatherDetailAction;
export type AppActions = WeatherActionTypes;