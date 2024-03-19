import BannerSection from './sections/BannerSection';
import ListSection from './sections/ListSection';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Chart = () => {
  return (
    <div>
      <Header />
      <main>
        <BannerSection />
        <ListSection />
      </main>
      <Footer />
    </div>
  );
};

export default Chart;
