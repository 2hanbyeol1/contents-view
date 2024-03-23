import './RecentNewsSection.scss';

import { RECENT_NEWS } from '../../../data/news';
import ListItem from '../../common/ListItem';

const RecentNewsSection = () => {
  return (
    <section className="recent-news-section">
      <div className="title">최신 기사</div>
      <div className="recent-news-list">
        {RECENT_NEWS.map((news, idx) => (
          <ListItem key={`recent-news-${idx}`} url={news.url}>
            <div className="recent-news-title">{news.title}</div>
          </ListItem>
        ))}
      </div>
    </section>
  );
};

export default RecentNewsSection;
