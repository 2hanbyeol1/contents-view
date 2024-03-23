import './WhookRoomListSection.scss';

import WhookRoom from './WhookRoom';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { WHOOK_ROOMS } from '../../../data/whook';
import Loading from '../../common/Loading';

const WhookRoomListSection = () => {
  const dataPerPage = 10;
  let page = 0;

  const getNewItems = () => {
    const newItems = WHOOK_ROOMS.slice(
      page * dataPerPage,
      (page + 1) * dataPerPage
    );
    page += 1;
    return newItems;
  };

  const { items, targetRef, isLoading } = useInfiniteScroll(getNewItems);

  return (
    <section className="whook-list-section">
      {items.map((room) => (
        <WhookRoom key={room.title} room={room} />
      ))}
      <Loading targetRef={targetRef} isLoading={isLoading} />
    </section>
  );
};

export default WhookRoomListSection;
