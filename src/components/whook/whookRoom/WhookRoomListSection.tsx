import WhookRoom from './WhookRoom';
import { WhookRoomType } from '../../../types/whook';

type PropType = {
  rooms: WhookRoomType[];
};

const WhookRoomListSection = ({ rooms }: PropType) => {
  return (
    <section className="whook-list-section">
      {rooms.map((room) => (
        <WhookRoom key={room.title} room={room} />
      ))}
    </section>
  );
};

export default WhookRoomListSection;
