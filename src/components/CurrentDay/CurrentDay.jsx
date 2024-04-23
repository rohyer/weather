import { useContext } from 'react';
import { WeatherContext } from '../../WeatherContext';
import TempCard from '../TempCard/TempCard';
import WindCard from '../WindCard/WindCard';
import VisibilityCard from '../VisibilityCard/VisibilityCard';
import SunCard from '../SunCard/SunCard';

const CurrentDay = () => {

  return (
    <div className='flex gap-2'>
      <TempCard />
      <WindCard />
      <VisibilityCard />
      <SunCard />
    </div>
  );
};

export default CurrentDay;
