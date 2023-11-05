import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, data }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {data.map((item, i) => (
          <StatisticItem key={item.id} {...item} icon={icons[i]} />
        ))}
      </StatisticsList>
    </>
  );
};
