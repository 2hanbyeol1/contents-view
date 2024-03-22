import './PaidChargeItem.scss';

import CoinImg from '../../../assets/coin.png';
import { ChargePriceInfoType } from '../../../types/charge';

const PaidChargeItem = ({ info }: { info: ChargePriceInfoType }) => {
  const handleItemClick = (price: number) => {
    const a = window.confirm(`${price}원 결제`);
  };

  return (
    <div className="charge-item" onClick={() => handleItemClick(info.price)}>
      <div className="left-items">
        <img width={30} height={30} src={CoinImg} alt="coin-img" />
        <div className="charge-info">
          <div className="charge-name">
            후즈팬 골드 코인 <span className="charge-num">x {info.num}</span>
          </div>
          <div className="charge-price">
            &#8361;{info.price.toLocaleString()}
          </div>
        </div>
      </div>
      <button
        className="charge-btn"
        onClick={() => handleItemClick(info.price)}
      >
        결제하기
      </button>
    </div>
  );
};

export default PaidChargeItem;
