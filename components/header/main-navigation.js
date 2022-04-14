import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderNavLink from './header-nav-link';

import classes from '../../styles/modules/main-navigation.module.scss';

function MainNavigation() {
  const [rotate, setRotate] = useState(classes["open-list"]);

  const mobileNav = () => {
    if(rotate === classes["open-list"]){
      setRotate(classes["exit-list"]);
    }else{
      setRotate(classes["open-list"]);
    }
  }

  return (
    <Fragment>
      <header className={`${classes.mobileHeader} ${rotate}`}>
        <div className='icon-bg' onClick={mobileNav}>
          <span className={classes.line1} />
          <span className={classes.line2} />
          <span className={classes.line3} />
        </div>
        {/* <i className="bi bi-plus-circle-fill" onClick={mobileNav} /> */}
        <ul onClick={mobileNav}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about-me'>About Me</Link>
            </li>
            <li>
              <Link href='/about-the-site'>About the Site</Link>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/resume'>Resume</Link>
            </li>
        </ul>
      </header>
      <header className={classes.desktopHeader}>
        <ul>
          <HeaderNavLink hLink="/" text="Home" />
          <HeaderNavLink hLink="/about-me" text="About Me" />
          <HeaderNavLink hLink="/about-the-site" text="About The Site" />
          <HeaderNavLink hLink="/projects" text="Projects" />
          <HeaderNavLink hLink="/resume" text="Resume" />
        </ul>
      </header>
    </Fragment>
  );
}

export default MainNavigation;
