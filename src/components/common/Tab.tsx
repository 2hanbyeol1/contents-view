import './Tab.scss';
import { useState, ReactNode } from 'react';

type TabSectionPropType = { menus: string[]; sections: ReactNode[] };

export const Tab = ({ menus, sections }: TabSectionPropType) => {
  const [active, setActive] = useState<number>(0);

  const handleMenuClick = (idx: number) => {
    setActive(idx);
  };

  return (
    <div className="tab">
      <div className="tab-menu">
        {menus.map((menu, idx) => (
          <div
            key={`tab-menu-${idx}`}
            className="tab-menu-item"
            style={{
              backgroundColor: `${idx === active ? 'white' : ''}`,
              fontWeight: `${idx === active ? 'bold' : ''}`,
            }}
            onClick={() => handleMenuClick(idx)}
          >
            {menu}
          </div>
        ))}
      </div>
      <div className="tab-section">{sections[active]}</div>
    </div>
  );
};
