import { useContext } from 'react';
import { WeatherContext } from '../../WeatherContext';

const Forecast5Days = () => {
  const { forecast5Days, setForecast5Days } = useContext(WeatherContext);

  function formatDate(element) {
    const date = element.split(' ')[0];
    const day = date.split('-')[2];
    const month = date.split('-')[1];
    const year = date.split('-')[0];

    return `${day}/${month}/${year}`;
  }

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

  function listDays(element, index) {
    return (
      <div key={index} className="w-1/5 bg-cyan-950 rounded-xl p-5 mt-4">
        <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} alt="Clima" />
        <p>{element.main.temp} ºC</p>
        <p>{element.weather[0].description}</p>
        <p>{formatDate(element.dt_txt)}</p>
      </div>
    )
  }

  return (
    <div className="flex gap-2 h-full">
      {forecast5Days &&
        forecast5Days.list &&
        forecast5Days.list.filter((element, index, array) => ignoreSameDay(element, index, array)).map((element, index) => listDays(element, index))}
    </div>
  );
};

export default Forecast5Days;
