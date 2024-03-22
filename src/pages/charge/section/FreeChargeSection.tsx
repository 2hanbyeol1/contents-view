import './FreeChargeSection.scss';
import FreeChargeItem from '../../../components/charge/freeCharge/FreeChargeItem';

import { FREE_CHARGE_INFO } from '../../../data/charge';

const FreeChargeSection = () => {
  return (
    <section className="free-charge-section">
      {FREE_CHARGE_INFO.map((info) => (
        <FreeChargeItem key={`free-charge-${info.num}`} info={info} />
      ))}
    </section>
  );
};

export default FreeChargeSection;
