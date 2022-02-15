import Link from 'next/link';
import Image from 'next/image';

function MainNavigation() {
  return (
    <header>
      <Link href='/'>
          <a>
              <Image />
          </a>
      </Link>
      <nav>
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
      </nav>
    </header>
  );
}

export default MainNavigation;
