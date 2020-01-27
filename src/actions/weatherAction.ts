import { config } from './../config/config';
import { FETCH_WEATHER } from './type';
import axios from 'axios';
import { Dispatch } from 'redux';
import { AppActions } from './action';



export const fetchWeather = () => (dispatch : Dispatch<AppActions>) => {
      
       
    axios.get(`${config.url}get-weather`).then(res => {
        const response = res.data;
        
        dispatch({
            type : FETCH_WEATHER,
            weatherData : response
            
        })
    })
}

