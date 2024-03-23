import Tab from '../../components/common/Tab';
import WhookRoomListSection from '../../components/whook/whookRoom/WhookRoomListSection';

import { JOINED_ROOMS, WHOOK_ROOMS } from '../../data/whook';

const Whook = () => {
  const menus = ['채팅방', '참여 중인 채팅방'];
  const sections = [
    <WhookRoomListSection rooms={WHOOK_ROOMS} />,
    <WhookRoomListSection rooms={JOINED_ROOMS} />,
  ];

  return (
    <div>
      <Tab menus={menus} sections={sections} />
    </div>
  );
};

export default Whook;
