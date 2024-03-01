import { useState } from 'react';

const Search = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState({});

  const fetchGeocoding = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=2485fa7ddb71d3d0fe506f3dc5d8d4eb`,
    );
    const json = await response.json();
    return { lat: json[0].lat, lon: json[0].lon };
  };

  const fetchWeather = async () => {
    const { lat, lon } = await fetchGeocoding();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2485fa7ddb71d3d0fe506f3dc5d8d4eb&lang=pt_br`,
    );
    const json = await response.json();
    setWeather(json);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input === '') {
      setError('Preencha o campo');
    } else {
      fetchGeocoding();
      fetchWeather();
    }
  };

  return (
    <div className="relative w-5/12">
      {weather && weather.coord && weather.weather[0].description}

      <input
        className="h-12 w-full p-4 rounded-full"
        type="text"
        placeholder="Digite aqui..."
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
      <button
        className="flex justify-center items-center absolute right-1 top-0 bottom-0 rounded-full bg-transparent hover:bg-gray-800 border-none focus:outline-none transition-all w-10 h-10 m-auto"
        onClick={handleClick}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Search;
