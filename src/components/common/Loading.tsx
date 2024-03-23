import './Loading.scss';
import { RefObject } from 'react';
import LoadingImg from '../../assets/loading.gif';

type PropType = {
  targetRef: RefObject<HTMLDivElement>;
  isLoading: boolean;
};
const Loading = ({ targetRef, isLoading }: PropType) => {
  return (
    <div className="loading" ref={targetRef}>
      {isLoading ? <img width="30" src={LoadingImg} /> : <></>}
    </div>
  );
};

export default Loading;
