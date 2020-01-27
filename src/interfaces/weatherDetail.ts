export interface WeatherDataDetail {
    location : Location,
    current_observation : CurrentObservation
    forecasts : Forecasts[]
}

interface Location {
    woeid: number,
    city: string,
    region : string,
    country : string,
    lat: number,
    long: number,
    timezone_id: string
}

interface CurrentObservation {
      wind : Wind,
      astronomy : Astronomy,
      condition : Condition

}

interface Wind {
    chill: number,
    direction: number,
    speed: number
}

interface Astronomy {
    sunrise: string,
    sunset: string
}

interface Condition {
    text: string,
    code: number,
    temperature: number 
} 

interface Forecasts {
    
        day: string,
        date: number,
        low: number,
        high: number,
        text: string,
        code: number
      
}