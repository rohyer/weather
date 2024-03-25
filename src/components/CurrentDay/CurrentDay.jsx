import { useContext } from 'react';
import { WeatherContext } from '../../WeatherContext';

const CurrentDay = () => {
  const { data, setData } = useContext(WeatherContext);

  return (
    <div className="w-1/5 h bg-cyan-950 rounded-xl p-5 mt-4">
      {data && data.weather && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Clima"
          />
          <p className="text-5xl mb-3">{data.main.temp} ºC</p>
          <p>{data.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default CurrentDay;
