import MobileMenu from './components/layout/MobileMenu';
import HomePage from './pages/HomePage';
import { Fragment } from 'react';

function MainSite() {
  return (
    <Fragment>
      <div className="container__x">
        <HomePage />

        <MobileMenu />
      </div>
    </Fragment>
  );
}

export default MainSite;
