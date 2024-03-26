import { createContext } from 'react';

export const WeatherContext = createContext({
  currentWeather: {},
  forecast5Days: {},
  setCurrentWeather: () => {},
  setForecast5Days: () => {},
});
