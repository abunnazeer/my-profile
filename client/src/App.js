import NoPage from './pages/NoPage';

// configuration import

import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Fragment>
      <HomePage />
      {/* <Routes><Route path="/*" element={<NoPage />} /></Routes> */}
    </Fragment>
  );
}

export default App;
