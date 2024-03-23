import { ReactNode } from 'react';
import './Button.scss';

type PropType = {
  width?: number | string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  color?: string;
  text?: string;
  url?: string;
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
  children,
  onClick,
}: PropType) => {
  const handleClick = (url: string) => {
    if (url) window.location.href = url;
    if (onClick) onClick();
  };

  return (
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
  );
};

export default Button;
