import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Chart from './pages/chart/Chart';
import NotFound from './pages/error/NotFound';

import Path from './constants/path';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={Path.chart} />} />
        <Route path={Path.chart} element={<Chart />} />
        <Route path={Path.whook} element={<Chart />} />
        <Route path={Path.event} element={<Chart />} />
        <Route path={Path.news} element={<Chart />} />
        <Route path={Path.store} element={<Chart />} />
        <Route path={Path.charge} element={<Chart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
