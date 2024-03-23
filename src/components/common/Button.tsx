import './Button.scss';

const handleClick = (url: string) => {
  if (url) window.location.href = url;
  else alert('링크가 없습니다.');
};

type PropType = {
  text: string;
  url: string;
};

const Button = ({ text, url }: PropType) => {
  return (
    <button className="btn" onClick={() => handleClick(url)}>
      {text}
    </button>
  );
};

export default Button;
