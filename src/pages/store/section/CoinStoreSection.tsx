import StoreItem from '../../../components/store/StoreItem';
import './CoinStoreSection.scss';
import { COIN_STORES } from '../../../data/store';

const CoinStoreSection = () => {
  return (
    <div>
      {COIN_STORES.map((store, idx) => (
        <StoreItem key={`coin-store-${idx}`} store={store} isCoinStore />
      ))}
    </div>
  );
};

export default CoinStoreSection;
