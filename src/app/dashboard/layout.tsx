"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { SessionProvider, signOut } from "next-auth/react";
import Loader from "@/app/components/common/Loader";
import { UserProvider } from "./UserContext"; // Adjust the import path accordingly

interface RootLayoutProps {
  children: ReactNode;
  session: any;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, session }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const inactiveTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const resetTimer = () => {
      if (inactiveTimerRef.current) {
        clearTimeout(inactiveTimerRef.current);
      }

      const timer = setTimeout(() => {
        signOut();
      }, 240000); // 2 minutes

      inactiveTimerRef.current = timer;
    };

    resetTimer();

    const handleUserActivity = () => {
      resetTimer();
    };

    const handleBeforeUnload = () => {
      signOut();
    };

    window.addEventListener("click", handleUserActivity);
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("click", handleUserActivity);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (inactiveTimerRef.current) {
        clearTimeout(inactiveTimerRef.current);
      }
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <UserProvider>
        {loading ? <Loader /> : children}
      </UserProvider>
    </SessionProvider>
  );
};

export default RootLayout;
