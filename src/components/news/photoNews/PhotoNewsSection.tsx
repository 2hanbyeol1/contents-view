import './PhotoNewsSection.scss';

import { PHOTO_NEWS } from '../../../data/news';
import PhotoNews from './PhotoNews';

const PhotoNewsSection = () => {
  return (
    <section className="photo-news-section">
      <div className="title">포토 뉴스</div>
      <div className="photo-news-grid">
        {PHOTO_NEWS.map((news, idx) => (
          <PhotoNews key={`photo-news-${idx}`} news={news} />
        ))}
      </div>
    </section>
  );
};

export default PhotoNewsSection;
