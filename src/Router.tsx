import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@constants/index';
import Header from '@components/Header';
import Home from '@pages/Home';

const Router = () => (
  <BrowserRouter>
    <Header />
    <div className="mt-4 mx-5">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
);
export default Router;
