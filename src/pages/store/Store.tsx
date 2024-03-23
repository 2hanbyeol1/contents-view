import Tab from '../../components/common/Tab';
import CoinStoreSection from './section/CoinStoreSection';
import CreditStoreSection from './section/CreditStoreSection';

const Store = () => {
  const menus = ['코인 스토어', '크레딧 스토어'];
  const sections = [<CoinStoreSection />, <CreditStoreSection />];
  return (
    <>
      <Tab menus={menus} sections={sections} />
    </>
  );
};

export default Store;
