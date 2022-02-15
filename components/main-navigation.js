import Link from 'next/link';

function MainNavigation() {
  return (
    <header>
      <Link href='/'>Home</Link>
      <nav>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
