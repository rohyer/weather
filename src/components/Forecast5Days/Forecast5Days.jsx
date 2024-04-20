import { useContext } from 'react';
import { WeatherContext } from '../../WeatherContext';

const Forecast5Days = () => {
  const { forecast5Days, setForecast5Days } = useContext(WeatherContext);

  function ignoreSameDay(element, index, array) {
    if (index === 0) {
      return true
    } else {
      if (element.dt_txt.split(' ')[0] === array[index - 1].dt_txt.split(' ')[0]) {
        return false
      }
      else {
        return true;
      }
    }
  }

  return (
    <div className="flex gap-2">
      {forecast5Days &&
        forecast5Days.list &&
        forecast5Days.list.filter((element, index, array) => ignoreSameDay(element, index, array)).map((element, index) => (
          <div key={index} className="w-1/5 h bg-cyan-950 rounded-xl p-5 mt-4">
            <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} alt="Clima" />
            <p>{element.main.temp} ºC</p>
            {element.weather[0].description}
            {element.dt_txt}
          </div>
        ))}
    </div>
  );
};

export default Forecast5Days;
