import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherList from './components/weatherList';
import WeatherDetail from './components/weatherDetail';

const App: React.FC = () => {
  return (
    <div>
    <WeatherList />      
    <WeatherDetail />
    </div>
  );
}

export default App;
