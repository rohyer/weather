import { useContext } from 'react';
import { WeatherContext } from '../../WeatherContext';

const Forecast5Days = () => {
  const { forecast5Days, setForecast5Days } = useContext(WeatherContext);

  return (
    <div className="flex gap-2">
      {forecast5Days &&
        forecast5Days.list &&
        forecast5Days.list.map((element, index) => (
          <div key={index} className="w-1/5 h bg-cyan-950 rounded-xl p-5 mt-4">
            {element.weather[0].description}
          </div>
        ))}
    </div>
  );
};

export default Forecast5Days;
