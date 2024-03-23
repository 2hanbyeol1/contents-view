import StoreItem from './StoreItem';

import { StoreType } from '../../types/store';

type PropType = {
  stores: StoreType[];
  isCoinStore?: boolean;
};

const StoreSection = ({ stores, isCoinStore = false }: PropType) => {
  return (
    <div>
      {stores.map((store, idx) => (
        <StoreItem
          key={`${isCoinStore ? 'coin' : 'credit'}-store-${idx}`}
          store={store}
          isCoinStore={isCoinStore}
        />
      ))}
    </div>
  );
};

export default StoreSection;
