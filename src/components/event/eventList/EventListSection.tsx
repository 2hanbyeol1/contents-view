import './EventListSection.scss';
import EventBanner from './EventBanner';

import { EVENTS } from '../../../data/event';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import Loading from '../../common/Loading';

const EventListSection = () => {
  const dataPerPage = 3;
  let page = 0;

  const getNewItems = () => {
    const newItems = EVENTS.slice(page * dataPerPage, (page + 1) * dataPerPage);
    page += 1;
    return newItems;
  };

  const { items, targetRef, isLoading } = useInfiniteScroll(getNewItems);

  return (
    <section className="event-list-section">
      {items.map((event, idx) => (
        <EventBanner key={`event-${idx}`} event={event} />
      ))}
      <Loading targetRef={targetRef} isLoading={isLoading} />
    </section>
  );
};

export default EventListSection;
