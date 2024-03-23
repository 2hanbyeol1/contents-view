import './ChartListSection.scss';
import ChartListItem from './ChartListItem';
import { CHART_ITEMS_100 } from '../../../data/chart';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import loadingImg from '../../../assets/loading.gif';

const ChartListSection = () => {
  const dataPerPage = 20;
  let page = 0;

  const getNewItems = () => {
    const newItems = CHART_ITEMS_100.slice(
      page * dataPerPage,
      (page + 1) * dataPerPage
    );
    page += 1;
    return newItems;
  };

  const { items, targetRef, isLoading } = useInfiniteScroll(getNewItems);

  return (
    <section className="chart-list-section">
      <div className="title-container">
        <div className="title">TOP 100 차트</div>
      </div>
      <div className="chart-list">
        {items.map((item, idx) => {
          return (
            <ChartListItem
              key={`chart-100-list-${idx}`}
              rank={idx + 1}
              item={item}
            />
          );
        })}
        <div style={{ textAlign: 'center', marginTop: 2 }} ref={targetRef}>
          {isLoading ? <img width="30" src={loadingImg} /> : <></>}
        </div>
      </div>
    </section>
  );
};

export default ChartListSection;
