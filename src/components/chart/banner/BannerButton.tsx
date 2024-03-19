import './BannerButton.scss';

const handleClick = (url: string) => {
  window.location.href = url;
};

type PropType = {
  text: string;
  url: string;
};

const BannerButton = ({ text, url }: PropType) => {
  return (
    <button className="banner-btn" onClick={() => handleClick(url)}>
      {text}
    </button>
  );
};

export default BannerButton;
