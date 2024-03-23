import './Modal.scss';
import { ReactNode } from 'react';

type PropType = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, children }: PropType) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {/* <span className="close" onClick={onClose}>
          x
        </span> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
