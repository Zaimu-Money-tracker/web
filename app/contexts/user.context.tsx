import { createContext, useContext, useEffect, useState } from "react";
import User from "~/interfaces/user/user.interface";
import axios from "axios";
import { EnvConfig } from "~/config/env.config";

const env = EnvConfig();

interface DataContextType {
  user: User;
  fetchData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  const fetchData = async () => {
    await axios
      .get(`${env.zaimu_api_url}/user`, { withCredentials: true })
      .then((res) => {
        return setUser(res.data);
      })
      .catch((err) => {
        return console.log(err);
      });
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
