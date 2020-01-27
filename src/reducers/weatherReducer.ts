import { WeatherActionTypes } from '../actions/action';
import { FETCH_WEATHER,FETCH_WEATHER_DETAIL } from '../actions/type';



const initialState  = {
      data : {},
      loading : true,
      detail : {},
      detailLoading : true
};

export default (state = initialState, action: WeatherActionTypes)  => {
      switch(action.type){
           case FETCH_WEATHER:
               return {
                     ...state,
                      data : action.weatherData,
                      loading : false        
               };

            case FETCH_WEATHER_DETAIL:
                  return {
                        ...state,
                        detail : action.weather,
                        detailLoading : false
                  }   
            default :
              return state;   
      } 
}



