import './EventListSection.scss';
import EventBanner from './EventBanner';

import { EVENTS } from '../../../data/event';

const EventListSection = () => {
  return (
    <section className="event-list-section">
      {EVENTS.map((event, idx) => (
        <EventBanner key={`event-${idx}`} event={event} />
      ))}
    </section>
  );
};

export default EventListSection;
