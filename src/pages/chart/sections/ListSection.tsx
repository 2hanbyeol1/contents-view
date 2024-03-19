import './ListSection.scss';
import ListItem from '../../../components/chart/list/ListItem';
import { chart_items } from '../../../data/dummy';

const ListSection = () => {
  return (
    <section className="list-section">
      <div className="title">콘텐츠 큐레이션 제목</div>
      <article className="list">
        {chart_items.map((item, idx) => (
          <ListItem key={`list-${item.id}`} rank={idx + 1} item={item} />
        ))}
      </article>
    </section>
  );
};

export default ListSection;
