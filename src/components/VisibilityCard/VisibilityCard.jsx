import CurrentDay from "../CurrentDay/CurrentDay";
import { WeatherContext } from "../../WeatherContext";
import { useContext } from "react";

const VisibilityCard = () => {
  const { currentWeather, setCurrentWeather } = useContext(WeatherContext);

  return (
    <div className="flex flex-col justify-end w-1/5 h bg-cyan-950 rounded-xl p-5 mt-4">
      { currentWeather && currentWeather.weather && (
        <>
          <h4>Visibilidade</h4>
          <p><span className="text-4xl">{currentWeather.visibility}</span>  metros</p> 
        </>
      )}
    </div>
  )
}

export default VisibilityCard;