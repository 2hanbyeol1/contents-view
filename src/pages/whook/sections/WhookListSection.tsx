import WhookRoom from '../../../components/whook/WhookRoom';
import { WhookRoomType } from '../../../types/whook';

type PropType = {
  rooms: WhookRoomType[];
};

const WhookListSection = ({ rooms }: PropType) => {
  return (
    <section className="whook-list-section">
      {rooms.map((room) => (
        <WhookRoom key={room.title} room={room} />
      ))}
    </section>
  );
};

export default WhookListSection;
