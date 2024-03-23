import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Chart from './pages/chart/Chart';
import Chart100 from './pages/chart/100/Chart100';
import Whook from './pages/whook/Whook';
import WhookChat from './pages/whook/chat/WhookChat';
import Event from './pages/event/Event';
import News from './pages/news/News';
import Store from './pages/store/Store';
import Charge from './pages/charge/Charge';
import NotFound from './pages/error/NotFound';

import Path from './constants/path';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={Path.chart} />} />
        <Route element={<MainLayout />}>
          <Route path={Path.chart} element={<Chart />} />
          <Route path={Path.chart100} element={<Chart100 />} />
          <Route path={Path.whook} element={<Whook />} />
          <Route path={Path.whookChat} element={<WhookChat />} />
          <Route path={Path.event} element={<Event />} />
          <Route path={Path.news} element={<News />} />
          <Route path={Path.store} element={<Store />} />
          <Route path={Path.charge} element={<Charge />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
