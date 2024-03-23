import './EventBanner.scss';
import useBannerStatus from '../../hooks/useBannerStatus';
import useFormattedDateString from '../../hooks/useDateString';
import { EventType } from '../../types/event';
import Card from '../common/Card';
import Button from '../common/Button';

type PropType = {
  event: EventType;
};

const EventBanner = ({ event }: PropType) => {
  const { backgroundColor, status } = useBannerStatus(event.date);
  const startDateStr = useFormattedDateString(event.date[0]);
  const endDateStr = useFormattedDateString(event.date[1]);

  const FINISHED = '종료';

  const Content = () => {
    return (
      <>
        <span style={{ backgroundColor }} className={`event-status`}>
          {status}
        </span>
        <div className="event-content">
          <div className="event-info-top">
            <div className="event-name">{event.name}</div>
            {event.btn && status !== FINISHED ? (
              <Button text={event.btn} url={event.url} />
            ) : (
              <></>
            )}
          </div>
          <div className="event-info-bottom">
            <div className="event-winner">
              {event.winner ? `👑 ${event.winner}` : ''}
            </div>
            <div className="event-date">
              {startDateStr} ~ {endDateStr}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="event-banner">
      <Card
        url={status === FINISHED ? '' : event.url}
        src={event.src}
        content={<Content />}
      />
    </div>
  );
};

export default EventBanner;
