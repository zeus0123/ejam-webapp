export interface WeatherList {
     location :  Location
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
