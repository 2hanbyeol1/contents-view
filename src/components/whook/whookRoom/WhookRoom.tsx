import './WhookRoom.scss';

import { useState } from 'react';
import ListItem from '../../common/ListItem';
import { WhookRoomType } from '../../../types/whook';
import Modal from '../../common/Modal';
import Button from '../../common/Button';
import Path from '../../../constants/path';

type PropType = {
  room: WhookRoomType;
};

const WhookRoom = ({ room }: PropType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const Content = () => {
    return (
      <>
        <div className="whook-room-content" onClick={openModal}>
          <div className="img-container">
            <img src={room.src} />
          </div>
          <div className="right-items">
            <div className="title">{room.title}</div>
            <div className="participate">
              <span className="num">{room.num}명</span> 참여 중
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <ListItem>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="room-title">'{room.title}'</div>
        <div className="room-ask">채팅방에 참여하시겠습니까?</div>
        <div className="room-btn-group">
          <Button to={Path.whookChat}>참여하기</Button>
          <Button color="gray" onClick={closeModal}>
            뒤로가기
          </Button>
        </div>
      </Modal>
      <Content />
    </ListItem>
  );
};

export default WhookRoom;
