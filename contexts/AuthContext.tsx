"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import { checkAuth, clearTokenCookie, getUser, logoutAction } from "@/actions/auth.actions";
import { User } from "@/types/auth.types";

interface AuthContextType {
  user: User | null;
  login: (_userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  const isAuthenticated = !!user;

  const login = useCallback((userData: User) => {
    setUser(userData);
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    await logoutAction();
    await clearTokenCookie();
    setUser(null);
    router.push("/login");
    setIsLoading(false);
  }, [router]);

  const refreshUser = useCallback(async () => {
    const isStillAuthenticated = await checkAuth();
    if (isStillAuthenticated) {
      const result = await getUser();
      if (result.success && result.user) {
        login(result.user);
      } else {
        await logout();
      }
    } else {
      await logout();
    }
  }, [login, logout]);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const isCurrentlyAuthenticated = await checkAuth();

        if (isCurrentlyAuthenticated) {
          const result = await getUser();
          if (result.success && result.user) {
            setUser(result.user);
          } else {
            await logout();
          }
        }
      } catch (error) {
        console.error("Failed to initialize authentication:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, [logout]); // `logout` is stable, so this effectively runs once.

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isLoading,
      isAuthenticated,
      refreshUser,
    }),
    [user, login, logout, isLoading, isAuthenticated, refreshUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
