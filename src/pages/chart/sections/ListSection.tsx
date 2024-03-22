import './ListSection.scss';
import ListItem from '../../../components/chart/list/ListItem';
import { CHART_ITEMS } from '../../../data/chart';

const ListSection = () => {
  return (
    <section className="list-section">
      <div className="title">뮤직 차트</div>
      <article className="list">
        {CHART_ITEMS.map((item, idx) => (
          <ListItem key={`list-${item.id}`} rank={idx + 1} item={item} />
        ))}
      </article>
    </section>
  );
};

export default ListSection;
