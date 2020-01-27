import React from 'react';
import { useSelector } from 'react-redux';
import { WeatherDataDetail } from '../interfaces/weatherDetail';

interface WeatherDetailState {
        weatherList : {
            detail : WeatherDataDetail,
            detailLoading : boolean
        }
}

const WeatherDetail : React.FC = () => {

    const weatherDetail = useSelector((state : WeatherDetailState) => state.weatherList);

    return (
        <div className='container'>
           {weatherDetail.detailLoading === false ? 
               <div className='row'>
                  <div className='col-md-8 offset-md-2'>
                  <h3 style={{textAlign : 'center'}}>
                      {weatherDetail.detail.location.city}
                  </h3>
                  
                  
                      <ul className='list-group'>
                          <li className='list-group-item'>
                          <div className="float-left">
                        <span>{weatherDetail.detail.location.timezone_id}</span>
                      </div>
                      <div className="float-right">
                        <span>Woeid -  {weatherDetail.detail.location.woeid}</span>
                      </div>
                          </li>
                      </ul>
                      <br></br> 
                      <ul className='list-group'>
                          <li className='list-group-item'>
                          <div className="float-left">
                        <span>Sunrise {weatherDetail.detail.current_observation.astronomy.sunrise}</span>
                      </div>
                      <div className="float-right">
                        <span>Sunset -  {weatherDetail.detail.current_observation.astronomy.sunset}</span>
                      </div>
                          </li>
                      </ul>
                     </div> 
                    
                  </div>
                  
                  
               
                  
             : null   }            
        </div>
    );
}

export default WeatherDetail;

