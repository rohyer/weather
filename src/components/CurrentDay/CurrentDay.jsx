import { useContext } from 'react';
import { WeatherContext } from '../../WeatherContext';
import TempCard from '../TempCard/TempCard';
import SunCard from '../SunCard/SunCard';

const CurrentDay = () => {

  return (
    <div className='flex gap-2'>
      <TempCard />
      <SunCard />
    </div>
  );
};

export default CurrentDay;
