import { createContext } from 'react';

export const WeatherContext = createContext({
  data: {},
  setData: () => {},
});
