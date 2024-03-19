import './ListItem.scss';

type PropType = {
  rank: number;
  item: {
    id: string;
    src: string;
    name: string;
    artist: string;
  };
};

const ListItem = ({ rank, item }: PropType) => {
  return (
    <a
      className="list-item-container"
      href={`https://www.hanteochart.com/songdetail/${item.id}/real`}
      target="_blank"
    >
      <div className="item-img">
        <img src={item.src} />
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
