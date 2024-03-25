import { useContext } from 'react';
import Mode from '../Mode/Mode.jsx';
import Search from '../Search/Search.jsx';
import { WeatherContext } from '../../WeatherContext.jsx';

const Header = () => {
  const { data, setData } = useContext(WeatherContext);

  return (
    <header className="flex justify-between items-center h-16">
      <h1 className="text-2xl">
        <i className="fa-solid fa-location-dot mr-4"></i>
        {data && data.name}
      </h1>
      <Search />
      <Mode />
    </header>
  );
};

export default Header;
