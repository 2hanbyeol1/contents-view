import './StoreItem.scss';
import { StoreType } from '../../types/store';
import CoinImg from '../../assets/coin.png';
import CreditImg from '../../assets/credit.png';
import Button from '../common/Button';
import ListItem from '../common/ListItem';

type PROPTYPE = {
  store: StoreType;
  isCoinStore?: boolean;
};

const StoreItem = ({ store, isCoinStore = false }: PROPTYPE) => {
  return (
    <ListItem>
      <div className="store-item">
        <div className="product-info">
          <div className="product">{store.product}</div>
          <div className="num">X {store.num}</div>
        </div>
        <Button width="5rem" borderWidth={1} borderRadius={'0.7rem'}>
          <div className="btn-content">
            <div>{store.price} </div>
            <img className="unit" src={isCoinStore ? CoinImg : CreditImg} />
          </div>
        </Button>
      </div>
    </ListItem>
  );
};

export default StoreItem;
