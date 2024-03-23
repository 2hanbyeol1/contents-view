import { CHART_ITEMS_100 } from '../../data/chart';
import BannerSection from '../../components/chart/banner/BannerSection';
import ChartListSection from '../../components/chart/chartList/ChartListSection';

const Chart = () => {
  return (
    <>
      <BannerSection />
      <ChartListSection
        title="뮤직 차트"
        items={CHART_ITEMS_100.slice(0, 5)}
        btnActive
      />
    </>
  );
};

export default Chart;
