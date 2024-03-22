import { ChartItemType } from '../../../types/chart';
import './ListItem.scss';

type PropType = {
  rank: number;
  item: ChartItemType;
};

const ListItem = ({ rank, item }: PropType) => {
  return (
    <a
      className="list-item-container"
      href={`https://www.hanteochart.com/songdetail/${item.id}/real`}
    >
      <div className="item-img-container">
        <img src={item.src} alt="item-img" />
      </div>
      <div className="rank">{rank}</div>
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-artist">{item.artist}</div>
      </div>
    </a>
  );
};

export default ListItem;
