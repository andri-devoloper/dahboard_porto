import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

interface ExtendedUser {
  id: string;
  name: string;
  email: string;
  password: string;
  rules: string;
}

declare module "next-auth" {
  interface Session {
    id: string;
    email: string;
    rules: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        console.log("User from database:", user);

        if (!user) return null;

        const decode = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!decode) return null;

        return {
          name: user.name,
          email: user.email,
          id: user.id.toString(),
          rules: user.rules,
        } as ExtendedUser;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        const extendedUser = user as ExtendedUser;
        token.id = extendedUser.id;
        token.email = extendedUser.email;
        token.rules = extendedUser.rules;
      }
      return token;
    },

    async session({ session, token }) {
      session.id = token.id as string;
      session.email = token.email as string;
      session.rules = token.rules as string;
      return session;
    },
  },
};
