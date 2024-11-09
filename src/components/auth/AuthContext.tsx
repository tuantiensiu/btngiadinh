import { createContext, useContext, useState, FC, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  const login = async (email: string, password: string) => {
    // Demo accounts
    const demoAccounts = {
      "admin@demo.com": { password: "admin123", role: "admin" },
      "leader@demo.com": { password: "leader123", role: "leader" },
    };

    // Check if credentials match demo accounts
    if (
      email in demoAccounts &&
      demoAccounts[email as keyof typeof demoAccounts].password === password
    ) {
      setIsAuthenticated(true);
      setUserRole(demoAccounts[email as keyof typeof demoAccounts].role);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
