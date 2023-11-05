import { IconContext } from 'react-icons';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ title, total, icon }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ color: '2196F3', size: '30px' }}>
        {icon}
      </IconContext.Provider>

      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
