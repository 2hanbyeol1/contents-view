import './FreeChargeItem.scss';
import Card from '../../common/Card';

import { FreeChargeInfoType } from '../../../types/charge';

type FreeChargeItemProps = {
  info: FreeChargeInfoType;
};

const FreeChargeItem = ({ info }: FreeChargeItemProps) => {
  const Content = () => {
    return (
      <div className="free-charge-item">
        <div className="title">{info.title}</div>
        <div className="desc">
          {info.condition} 시 <span className="num">{info.num}</span> 크레딧
          제공
        </div>
      </div>
    );
  };

  return (
    <Card width="100%" url={info.url} src={info.src} content={<Content />} />
  );
};

export default FreeChargeItem;
