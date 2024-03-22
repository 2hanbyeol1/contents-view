import PaidChargeItem from '../../../components/charge/paidCharge/PaidChargeItem';

import { CHARGE_PRICE_INFO } from '../../../data/charge';

const PaidChargeSection = () => {
  return (
    <section className="paid-charge-section">
      {CHARGE_PRICE_INFO.map((info) => (
        <PaidChargeItem key={`paid-charge-${info.num}`} info={info} />
      ))}
    </section>
  );
};

export default PaidChargeSection;
