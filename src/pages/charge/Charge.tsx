import './Charge.scss';
import { Tab } from '../../components/common/Tab';

import FreeChargeSection from './section/FreeChargeSection';
import PaidChargeSection from './section/PaidChargeSection';

const Charge = () => {
  const menus = ['무료 충전소', '유료 충전소'];
  const sections = [<FreeChargeSection />, <PaidChargeSection />];

  return (
    <div>
      <Tab menus={menus} sections={sections} />
    </div>
  );
};

export default Charge;
