import { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { geoApiOptions, GEO_API_URL } from '../../api';

const Search = () => {
  const [search, setSearch] = useState({
    lat: '',
    lon: '',
  });
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      console.log('Latitude: ' + search.lat);
      console.log('Longitude: ' + search.lon);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${search.lat}&lon=${search.lon}&appid=2485fa7ddb71d3d0fe506f3dc5d8d4eb&lang=pt_br`,
      );
      const json = await response.json();
      setWeather(json);
    };
    fetchWeather();
  }, [search]);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions,
    )
      .then((response) => response.json())
      .then((response) =>
        response.data.map((data) => {
          return {
            value: `${data.latitude} ${data.longitude}`,
            label: `${data.name}, ${data.countryCode}`,
          };
        }),
      )
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSearch({
      lat: e.value.split(' ')[0],
      lon: e.value.split(' ')[1],
    });
  };

  return (
    <div className="relative w-5/12">
      {weather && weather.coord && weather.weather[0].description}
      {weather && weather.name}

      <AsyncSelect
        placeholder="Pesquisa por uma cidade"
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
