import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = (getNewItems: () => any[]) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState(getNewItems());

  const targetRef = useRef<HTMLDivElement | null>(null);

  const loadItems = () => {
    setIsLoading(true);
    const newItems = getNewItems();
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...newItems]);
      setIsLoading(false);
    }, 1000);
  };

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadItems();
        }
      },
      { threshold: 0.1 }
    )
  );

  useEffect(() => {
    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.current.unobserve(targetRef.current);
      }
    };
  }, [targetRef, observer]);

  return { items, targetRef, isLoading };
};

export default useInfiniteScroll;
