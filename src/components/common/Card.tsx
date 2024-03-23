import './Card.scss';
import { ReactNode } from 'react';

type CardPropType = {
  width?: number | string;
  url?: string;
  src: string;
  content: ReactNode;
};

const Card = ({ width = '100%', url = '', src, content }: CardPropType) => {
  const handleCardClick = (url: string) => {
    if (url) window.location.href = url;
  };

  return (
    <div
      className="card"
      style={{ width: width }}
      onClick={() => handleCardClick(url)}
    >
      <div className="card-img-container">
        <img src={src} alt="card-img" />
      </div>
      <div className="card-info-container">{content}</div>
    </div>
  );
};

export default Card;
