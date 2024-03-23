import './ListItem.scss';

import { ReactNode } from 'react';

type PropType = {
  children: ReactNode;
  url?: string;
  onClick?: () => void;
};

const ListItem = ({ children, url = '', onClick = () => {} }: PropType) => {
  const handleListItemClick = (url: string) => {
    if (url) window.location.href = url;
  };

  return (
    <div
      className="list-item"
      onClick={() => {
        handleListItemClick(url);
        onClick();
      }}
    >
      {children}
    </div>
  );
};

export default ListItem;
