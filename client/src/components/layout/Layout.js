import { Fragment } from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
function Layout() {
  return (
    <Fragment>
      <Header />
      <MobileHeader />
    </Fragment>
  );
}

export default Layout;
