import NextAuth from 'next-auth';
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import {prisma} from '../../../../prisma/index';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {label: 'Email', type: 'text', placeholder: 'jsmith'},
        password: {label: 'Password', type: 'password'},
        username: {label: 'Username', type: 'text', placeholder: 'John Smith'},
      },
      async authorize(credentials) {
        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error('Please enter an email and password');
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error('No user found');
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error('Incorrect password');
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
