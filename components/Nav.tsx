'use client';

import Link from 'next/link';

const Nav = () => (
  <nav>
    <div className="m-auto flex max-w-[1240px] items-center justify-between p-4">
      <ul className="flex-column flex">
        <li className="p-4">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4">
          <Link href="/rtq">RTQ</Link>
        </li>
        <li className="p-4">
          <Link href="/prisma">Prisma</Link>
        </li>
        <li className="p-4">
          <Link href="/serveraction">Server actions</Link>
        </li>
        <li className="p-4">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
