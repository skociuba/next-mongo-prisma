'use client';
import {useEffect} from 'react';
import {useSession, signOut} from 'next-auth/react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
const Nav = () => {
  const router = useRouter();
  useEffect(() => {
    if (session?.status !== 'authenticated') {
      router.push('/');
    }
  });

  const session = useSession();
  return (
    <nav>
      <p>Hi {session?.data?.user?.email}</p>
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-4">
        <ul className="flex-column flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>

          <li className="p-4">
            <Link href="/prisma">Prisma</Link>
          </li>

          {session?.status === 'authenticated' ? (
            <button onClick={() => signOut()}>Sign Out</button>
          ) : (
            <>
              <li className="p-4">
                <Link href="/login">Login</Link>
              </li>
              <li className="p-4">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
