import './Card.scss';
import { ReactNode } from 'react';

type CardPropType = {
  width?: number | string;
  url: string;
  src: string;
  content: ReactNode;
};

const Card = ({ width = '100%', url, src, content }: CardPropType) => {
  return (
    <div style={{ width: width }}>
      <a className="card" href={url}>
        <div className="card-img-container">
          <img src={src} alt="card-img" />
        </div>
        <div className="card-info-container">{content}</div>
      </a>
    </div>
  );
};

export default Card;
