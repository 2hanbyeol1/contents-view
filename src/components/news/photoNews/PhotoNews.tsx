import './PhotoNews.scss';

import Card from '../../common/Card';
import { PhotoNewsType } from '../../../types/news';

type PropType = { news: PhotoNewsType };

const PhotoNews = ({ news }: PropType) => {
  const Content = () => {
    return (
      <div className="photo-news-content">
        <div className="content-title">{news.title}</div>
      </div>
    );
  };

  return (
    <div className="photo-news">
      <Card width="100%" url={news.url} src={news.src} content={<Content />} />
    </div>
  );
};

export default PhotoNews;
