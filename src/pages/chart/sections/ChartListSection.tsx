import './ChartListSection.scss';
import ChartListItem from '../../../components/chart/list/ChartListItem';
import { Link } from 'react-router-dom';

import MoreImg from '../../../assets/more.png';
import Path from '../../../constants/path';
import { ChartItemType } from '../../../types/chart';

type PropType = {
  title: string;
  items: ChartItemType[];
  btnActive?: boolean;
};

const ChartListSection = ({ title, items, btnActive = false }: PropType) => {
  return (
    <section className="chart-list-section">
      {btnActive ? (
        <Link className="title-container" to={Path.chart100}>
          <div className="title">{title}</div>
          <img src={MoreImg} alt="more-icon" />
        </Link>
      ) : (
        <div className="title-container">
          <div className="title">{title}</div>
        </div>
      )}

      <article className="chart-list">
        {items.map((item, idx) => (
          <ChartListItem
            key={`chart-list-${item.id}`}
            rank={idx + 1}
            item={item}
          />
        ))}
      </article>
    </section>
  );
};

export default ChartListSection;
