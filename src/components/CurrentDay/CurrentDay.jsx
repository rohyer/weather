import { useContext } from 'react';
import { WeatherContext } from '../../WeatherContext';
import TempCard from '../TempCard/TempCard';
import SunCard from '../SunCard/SunCard';
import WindCard from '../WindCard/WindCard';

const CurrentDay = () => {

  return (
    <div className='flex gap-2'>
      <TempCard />
      <SunCard />
      <WindCard />
    </div>
  );
};

export default CurrentDay;
