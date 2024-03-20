import './Header.scss';
import { useLocation, Link } from 'react-router-dom';

import Path from '../../common/constants/path';

const headerItems: { name: string; path: string }[] = [
  { name: '차트', path: Path.chart },
  { name: 'Whook', path: Path.whook },
  { name: '이벤트', path: Path.event },
  { name: '뉴스', path: Path.news },
  { name: '스토어', path: Path.store },
  { name: '충전소', path: Path.charge },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <ul>
        {headerItems.map((item, idx) => {
          const active = location.pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                className={`header-item${active ? ' active' : ''}`}
                to={item.path}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
