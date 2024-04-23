import { WeatherContext } from "../../WeatherContext";
import { useContext } from "react";

const SunCard = () => {
  const { currentWeather, setCurrentWeather } = useContext(WeatherContext);

  function convertTime(timezone) {
    return timezone
  }

  return (
    <div className="w-1/5 h bg-cyan-950 rounded-xl p-5 mt-4">
      { currentWeather && (
        <>
          <h4>Visibilidade</h4>
          {convertTime(currentWeather.timezone)}
          {/* <p>Nascer{currentWeather.sys.sunrise}</p> 
          <p>Por{currentWeather.sys.sunset}</p>  */}
        </>
      )}
    </div>
  )
}

export default SunCard;