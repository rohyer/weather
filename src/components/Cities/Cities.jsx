import { useEffect, useState } from "react";

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchCities(lat, lon) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2485fa7ddb71d3d0fe506f3dc5d8d4eb&lang=pt_br&units=metric`);
      const json = await response.json();
      setCities((prev) => {
        return [...prev, json]
      })
      console.log(json.name)
    }

    fetchCities(51.5085300, -0.1257400);
    fetchCities(35.6895000, 139.6917100);
    fetchCities(40.7142700, -74.0059700);
    fetchCities(-23.5475000, -46.6361100);
  }, []);

  cities &&
  console.log(cities);

  return (
    <div className="flex flex-col justify-start w-1/5 h">
      {cities.map((city) => (
        <div className="flex flex-row justify-between items-center w-full h bg-cyan-950 rounded-xl p-5 mt-4">
          <div>
            <h3>{city.name}</h3>
            <p>{city.weather[0].description}</p>
          </div>
          <div>
            <img className="w-14 h-auto" src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="Clima" />
            <p>{city.main.temp} ºC</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cities;