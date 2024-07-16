import { useContext } from 'react';
import { WeatherContext } from '../../WeatherContext';

const TempCard = () => {
  const { currentWeather, setCurrentWeather } = useContext(WeatherContext);

  function getDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
      <p>
        {day}/{month}/{year}
      </p>
    );
  }

  return (
    <div className="w-2/6 h bg-cyan-950 rounded-xl p-5 mt-4">
      {currentWeather && currentWeather.weather && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt="Clima"
          />
          <p className="text-5xl mb-3">{currentWeather.main.temp} ºC</p>
          <p>{currentWeather.weather[0].description}</p>

          <div className="flex items-center mt-2">
            <i className="fa-solid fa-calendar-days mr-2"></i>
            {getDate()}
          </div>
        </>
      )}
    </div>
  );
};

export default TempCard;
