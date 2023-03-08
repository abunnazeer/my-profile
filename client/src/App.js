import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import HomePage from './pages/HomePage';
import Dashboard from './administration/Dashboard';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<Dashboard />} />
      </Routes>
      {/* <Routes><Route path="/*" element={<NoPage />} /></Routes> */}
    </Fragment>
  );
}

export default App;
