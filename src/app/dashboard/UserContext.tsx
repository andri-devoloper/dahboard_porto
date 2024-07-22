import React, { createContext, useContext, ReactNode } from "react";
import { useSession } from "next-auth/react";

interface UserContextProps {
  userId: string | null;
}

const UserContext = createContext<UserContextProps>({ userId: null });

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data: session } = useSession();

  return (
    <UserContext.Provider value={{ userId: session?.id ?? null }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
