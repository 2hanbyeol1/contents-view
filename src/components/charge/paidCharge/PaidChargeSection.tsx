import PaidChargeItem from './PaidChargeItem';
import Loading from '../../common/Loading';

import { CHARGE_PRICE_INFO } from '../../../data/charge';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

const PaidChargeSection = () => {
  const dataPerPage = 5;
  let page = 0;

  const getNewItems = () => {
    const newItems = CHARGE_PRICE_INFO.slice(
      page * dataPerPage,
      (page + 1) * dataPerPage
    );
    page += 1;
    return newItems;
  };

  const { items, targetRef, isLoading } = useInfiniteScroll(getNewItems);

  return (
    <section className="paid-charge-section">
      {items.map((info, idx) => (
        <PaidChargeItem key={`paid-charge-${idx}`} info={info} />
      ))}
      <Loading targetRef={targetRef} isLoading={isLoading} />
    </section>
  );
};

export default PaidChargeSection;
