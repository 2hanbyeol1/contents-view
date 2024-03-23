import './ChartListSection.scss';
import ChartListItem from './ChartListItem';
import { Link } from 'react-router-dom';

import MoreImg from '../../../assets/more.png';
import Path from '../../../constants/path';

import { CHART_ITEMS_100 } from '../../../data/chart';

const ChartListSection = () => {
  return (
    <section className="chart-list-section">
      <Link className="title-container" to={Path.chart100}>
        <div className="title">뮤직 차트</div>
        <img src={MoreImg} alt="more-icon" />
      </Link>
      <div className="chart-list">
        {CHART_ITEMS_100.slice(0, 5).map((item, idx) => (
          <ChartListItem key={`chart-list-${idx}`} rank={idx + 1} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ChartListSection;
