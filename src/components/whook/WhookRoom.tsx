import './WhookRoom.scss';

import ListItem from '../common/ListItem';
import { WhookRoomType } from '../../types/whook';

type PropType = {
  room: WhookRoomType;
};

const WhookRoom = ({ room }: PropType) => {
  const Content = () => {
    return (
      <div className="whook-room-content">
        <div className="img-container">
          <img src={room.src} />
        </div>
        <div className="right-items">
          <div className="title">{room.title}</div>
          <div className="participate">
            <span className="num">{room.num}명</span> 참여 중
          </div>
        </div>
      </div>
    );
  };
  return (
    <ListItem>
      <Content />
    </ListItem>
  );
};

export default WhookRoom;
