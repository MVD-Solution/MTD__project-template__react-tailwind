import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';

import Home from './pages/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
