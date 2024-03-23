import { useEffect, useRef } from 'react';

const InfiniteList = () => {
  const target = useRef<HTMLDivElement>(null!);

  const callback = () => {
    target.current.innerText += '관측되었습니다.';
  };

  const options = {
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    observer.observe(target.current);
  });

  return (
    <div>
      <div style={{ height: '300vh', backgroundColor: 'green' }} />
      <div style={{ height: '100px', backgroundColor: 'red' }} ref={target}>
        target
      </div>
    </div>
  );
};

export default InfiniteList;
