import { useState } from 'react';
import Header from './components/Header/Header';
import { WeatherContext } from './WeatherContext';
import CurrentDay from './components/CurrentDay/CurrentDay';
import Forecast5Days from './components/Forecast5Days/Forecast5Days';
import Cities from './components/Cities/Cities';

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
        <div className='flex flex-wrap gap-2'>
          <div className='w-full lg:w-4/6'>
            <CurrentDay />
            <Forecast5Days />
          </div>
          <Cities />
        </div>
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
