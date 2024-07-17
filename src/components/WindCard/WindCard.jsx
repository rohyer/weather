import { WeatherContext } from "../../WeatherContext";
import { useContext } from "react";

const WindCard = () => {
  const { currentWeather, setCurrentWeather } = useContext(WeatherContext);

  return (
    <div className="w-2/6 h bg-cyan-950 rounded-xl p-5 mt-4">
      {currentWeather && currentWeather.wind && (
        <>
          
          <p className="text-5xl mb-3">Vento</p>
          <p>Velocidade {currentWeather.wind.speed} m / s</p>
          <p>Direção: {currentWeather.wind.deg} graus</p>
          <p>Rajada: {currentWeather.wind.gust} m / s</p>
        </>
      )}
    </div>
  )
}

export default WindCard;