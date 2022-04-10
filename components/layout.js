import { Fragment } from 'react';
import Footer from './footer/footer';
import MainNavigation from './header/main-navigation';

function Layout({children}) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;