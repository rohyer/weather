import { useState } from 'react';
import Header from './components/Header/Header';
import { WeatherContext } from './WeatherContext';
import CurrentDay from './components/CurrentDay/CurrentDay';
import Forecast5Days from './components/Forecast5Days/Forecast5Days';

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast5Days, setForecast5Days] = useState();

  if (currentWeather && forecast5Days) {
    console.log('Atual' + currentWeather.cod);
    console.log('Futuro' + forecast5Days.cod);
  }

  function getComponents() {
    if (currentWeather && currentWeather.cod === 200) {
      return (
        <>
          <CurrentDay />
          <Forecast5Days />
        </>
      );
    }
  }

  return (
    <>
      <WeatherContext.Provider
        value={{
          currentWeather,
          setCurrentWeather,
          forecast5Days,
          setForecast5Days,
        }}
      >
        <Header />
        {getComponents()}
      </WeatherContext.Provider>
    </>
  );
}

export default App;
