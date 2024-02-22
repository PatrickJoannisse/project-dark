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

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setUser }}>
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
