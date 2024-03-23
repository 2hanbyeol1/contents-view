import StoreItem from '../../../components/store/StoreItem';
import './CreditStoreSection.scss';

import { CREDIT_STORES } from '../../../data/store';

const CreditStoreSection = () => {
  return (
    <div>
      {CREDIT_STORES.map((store, idx) => (
        <StoreItem key={`credit-store-${idx}`} store={store} />
      ))}
    </div>
  );
};

export default CreditStoreSection;
