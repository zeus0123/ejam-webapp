import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../actions/weatherAction';
import { fetchWeatherDetail } from '../actions/weatherDetailAction';
import { WeatherDataDetail } from '../interfaces/weatherDetail';

interface WeatherState {
    weatherList : {
        data : [],
        loading : boolean
    },
    
}
const WeatherList : React.FC = () => {

    const dispatch = useDispatch();
    const weatherData = useSelector((state : WeatherState) => state.weatherList);

    useEffect(() => {

        if(weatherData.loading === true){
             dispatch(fetchWeather())
        }
          
         
    });

    const handleClick = (woeid: number) => {
          dispatch(fetchWeatherDetail(woeid))
    }

    

    return (
        <div className='container'>
          <h3 style={{textAlign: 'center'}}>Weather App</h3> 

          <div className='row'>
               <div className='col-md-8 offset-md-2'>
               <ul className="list-group">
               {weatherData.loading === false ? weatherData.data.map((item : WeatherDataDetail,key) => 
                      <li key={key} className='list-group-item'>
                          
                             <div className='float-left'>
                             {item.location.city}
                                 </div> 
                              <div className='float-right'>
                              <button type='button' className='btn btn-primary' onClick={() => handleClick(item.location.woeid)}>Select</button>
                              </div>
                              
                              
                               
                              
                          
                          
                          
                      </li>)
                      :
                      null}  
          </ul>
               </div>
          </div>
               
        </div>
    );
}

export default WeatherList;
