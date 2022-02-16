import Link from 'next/link';
import Image from 'next/image';

import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <ul>
          <li>
            <Link href='/'>
                <a>
                    Image to go here
                    {/* <Image /> */}
                </a>
            </Link>
          </li>
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
  );
}

export default MainNavigation;
