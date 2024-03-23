import { ReactNode } from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

type PropType = {
  width?: number | string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  color?: string;
  text?: string;
  url?: string;
  to?: string;
  children?: ReactNode;
  onClick?: () => void | undefined;
};

const Button = ({
  width = '',
  borderRadius = '0.7rem',
  borderWidth = 1.5,
  color = '',
  text,
  url = '',
  to = '',
  children,
  onClick,
}: PropType) => {
  const handleClick = (url: string) => {
    if (url) window.location.href = url;
    if (onClick) onClick();
  };

  return (
    <>
      {to ? (
        <Link
          style={{
            width,
            borderRadius,
            borderWidth,
            borderColor: color,
            color,
          }}
          className="btn"
          to={to}
        >
          {text}
          {children}
        </Link>
      ) : (
        <button
          style={{
            width,
            borderRadius,
            borderWidth,
            borderColor: color,
            color,
          }}
          className="btn"
          onClick={() => handleClick(url)}
        >
          {text}
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
