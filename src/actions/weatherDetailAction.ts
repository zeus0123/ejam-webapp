import { config } from './../config/config';
import {  FETCH_WEATHER_DETAIL } from './type';
import axios from 'axios';
import { Dispatch } from 'redux';
import { AppActions } from './action';



export const fetchWeatherDetail = (woeid: number) => (dispatch : Dispatch<AppActions>) => {
      
       
    axios.get(`${config.url}get-weather-detail?woeid=${woeid}`).then(res => {
        const response = res.data;
        
        dispatch({
            type : FETCH_WEATHER_DETAIL,
            weather : response
            
        })
    })
}
