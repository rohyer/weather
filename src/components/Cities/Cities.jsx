import { useEffect, useState } from "react";

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchCities(lat, lon) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2485fa7ddb71d3d0fe506f3dc5d8d4eb&lang=pt_br&units=metric`
      );
      const json = await response.json();
      setCities((prev) => {
        return [...prev, json];
      });
      // console.log(json.name);
    }

    fetchCities(51.50853, -0.12574);
    fetchCities(35.6895, 139.69171);
    fetchCities(40.71427, -74.00597);
    fetchCities(-23.5475, -46.63611);
  }, []);

  return (
    <div className="flex flex-col justify-start w-1/5 h gap-2 mt-4">
      {cities.map((city) => (
        <div
          key={city.id}
          className="flex flex-row justify-between items-center w-full h bg-cyan-950 rounded-xl p-5"
        >
          <div>
            <h3>{city.name}</h3>
            <p>{city.weather[0].description}</p>
          </div>
          <div>
            <img
              className="w-14 h-auto"
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt="Clima"
            />
            <p>{city.main.temp} ºC</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cities;
