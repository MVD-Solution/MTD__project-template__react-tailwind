import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { ROUTES } from './constants';
import Home from './pages/Home';

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
