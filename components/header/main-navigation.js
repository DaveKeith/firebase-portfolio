import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';

import classes from './main-navigation.module.scss';

function MainNavigation() {
  const [rotate, setRotate] = useState("deg-0");

  const mobileNav = () => {
    if(rotate === "deg-0"){
      setRotate("deg-45");
    }else{
      setRotate("deg-0");
    }
  }

  useEffect(() => {
    window.onresize = setRotate("deg-0");
  }, []);

  return (
    <Fragment>
      <header className={`${classes.mobileHeader} ${rotate}`}>
        <div className='icon-bg' />
        <i className="bi bi-plus-circle-fill" onClick={mobileNav} />
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
    </Fragment>
  );
}

export default MainNavigation;
