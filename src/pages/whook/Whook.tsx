import Tab from '../../components/common/Tab';
import WhookListSection from './sections/WhookListSection';

import { JOINED_ROOMS, WHOOK_ROOMS } from '../../data/whook';

const Whook = () => {
  const menus = ['채팅방', '참여 중인 채팅방'];
  const sections = [
    <WhookListSection rooms={WHOOK_ROOMS} />,
    <WhookListSection rooms={JOINED_ROOMS} />,
  ];

  return (
    <div>
      <Tab menus={menus} sections={sections} />
    </div>
  );
};

export default Whook;
