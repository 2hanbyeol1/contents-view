import './FreeChargeSection.scss';
import FreeChargeItem from './FreeChargeItem';

import { FREE_CHARGE_INFO } from '../../../data/charge';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import Loading from '../../common/Loading';

const FreeChargeSection = () => {
  const dataPerPage = 4;
  let page = 0;

  const getNewItems = () => {
    const newItems = FREE_CHARGE_INFO.slice(
      page * dataPerPage,
      (page + 1) * dataPerPage
    );
    page += 1;
    return newItems;
  };

  const { items, targetRef, isLoading } = useInfiniteScroll(getNewItems);

  return (
    <section className="free-charge-section">
      <div className="free-charge-grid">
        {items.map((info) => (
          <FreeChargeItem key={`free-charge-${info.num}`} info={info} />
        ))}
      </div>
      <Loading targetRef={targetRef} isLoading={isLoading} />
    </section>
  );
};

export default FreeChargeSection;
