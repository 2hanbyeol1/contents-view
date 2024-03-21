import './ListSection.scss';
import ListItem from '../../../components/chart/list/ListItem';
import { chart_items } from '../../../data/dummy';

const ListSection = () => {
  return (
    <section className="list-section">
      <div className="title">뮤직 차트</div>
      <article className="list">
        {chart_items.map((item, idx) => (
          <ListItem key={`list-${item.id}`} rank={idx + 1} item={item} />
        ))}
      </article>
    </section>
  );
};

export default ListSection;
