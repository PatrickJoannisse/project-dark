import { redirect } from "@tanstack/react-router";
import axios from "axios";
import * as React from "react";

export type User = {
  id: string;
  email: string;
};

export interface AuthContext {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = React.useState<User | null>(null);
  const isAuthenticated = !!user;

  const memoedValue = React.useMemo(() => ({ user, isAuthenticated, setUser } as AuthContext), [user, isAuthenticated, setUser]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {children}
    </AuthContext.Provider>);
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export async function isAuthenticated(context: any, location: any) {
  const token = document.cookie;

  if (!token) {
    redirectToLogin(location);
  }

  try {
    const response = await axios.get('/api/auth/me', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getTokenFromCookie(token)}`
      }
    });

    const { id, email } = response.data;
    context.auth.setUser({ id, email } as User);
  } catch (error) {
    redirectToLogin(location);
  }
}

function redirectToLogin(location: any) {
  throw redirect({
    to: '/login',
    search: {
      redirect: location.href,
    },
  });
}

function getTokenFromCookie(cookie: string): string | undefined {
  return cookie.match(/ttrpg-store=(.*?)(;|$)/)?.[1];
}