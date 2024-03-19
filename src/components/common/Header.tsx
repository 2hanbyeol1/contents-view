import './Header.scss';
import { useState } from 'react';

const headerItems: string[] = [
  '차트',
  'Whook',
  '이벤트',
  '뉴스',
  '스토어',
  '충전소',
];

const Header = () => {
  const [active, setActive] = useState(0);

  return (
    <header className="header">
      <ul>
        {headerItems.map((item, idx) => (
          <li
            key={item}
            className={`header-item${active === idx ? ' active' : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
