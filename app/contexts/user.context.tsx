import { createContext, useContext, useEffect, useState } from "react";
import User from "~/interfaces/user/user.interface";
import { getUser } from "~/services/zaimu/user/user";

interface DataContextType {
  user: User;
  fetchData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  const fetchData = async () => {
    const data = await getUser();
    setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!user) return;

  return (
    <DataContext.Provider value={{ user, fetchData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used inside DataProvider");
  }

  return context;
}
