import { WeatherContext } from "../../WeatherContext";
import { useContext } from "react";

const SunCard = () => {
  const { currentWeather, setCurrentWeather } = useContext(WeatherContext);

  function convertTime(timezone) {
    const date = new Date(timezone * 1000);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    
    return `${hour}:${minutes}`;
  }

  return (
    <div className="flex flex-col justify-end w-1/5 h bg-cyan-950 rounded-xl p-5 mt-4">
      { currentWeather && (
        <>
          <h4>Nascer:</h4>
          <p className="text-4xl">{convertTime(currentWeather.sys.sunrise)}</p>
          <h4 className="mt-2">Pôr:</h4>
          <p className="text-4xl">{convertTime(currentWeather.sys.sunset)}</p>
        </>
      )}
    </div>
  )
}

export default SunCard;