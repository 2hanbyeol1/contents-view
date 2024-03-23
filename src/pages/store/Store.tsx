import Tab from '../../components/common/Tab';
import StoreSection from '../../components/store/StoreSection';
import { COIN_STORES, CREDIT_STORES } from '../../data/store';

const Store = () => {
  const menus = ['코인 스토어', '크레딧 스토어'];
  const sections = [
    <StoreSection stores={COIN_STORES} isCoinStore />,
    <StoreSection stores={CREDIT_STORES} />,
  ];
  return (
    <>
      <Tab menus={menus} sections={sections} />
    </>
  );
};

export default Store;
