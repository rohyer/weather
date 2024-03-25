import { useState } from 'react';
import Header from './components/Header/Header';
import { WeatherContext } from './WeatherContext';
import CurrentDay from './components/CurrentDay/CurrentDay';

function App() {
  const [data, setData] = useState();

  console.log(data);

  function getComponents() {
    if (data && data.cod === 200) {
      return (
        <CurrentDay />
      )
    }
  }

  return (
    <>
      <WeatherContext.Provider value={{ data, setData }}>
        <Header />
        {getComponents()}
      </WeatherContext.Provider>
    </>
  );
}

export default App;
