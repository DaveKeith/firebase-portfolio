import { Fragment } from 'react';
import Footer from './footer/footer';
import MainNavigation from './header/main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation compString={props.children[1].type.displayName}/>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;