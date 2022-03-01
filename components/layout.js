import { Fragment } from 'react';
import Footer from './footer/footer';
import MainNavigation from './header/main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;