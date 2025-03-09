
import { createContext, useState, useContext, useEffect } from "react";

// Mock user data - in a real app, this would come from your backend
const MOCK_USER = {
  id: "user-1",
  name: "Demo User",
  email: "demo@codequest.com",
};

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("codequest-user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("codequest-user");
      }
    }
    setIsLoading(false);
  }, []);

  // Login functionality
  const login = async (email, password) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === "demo@codequest.com" && password === "password") {
      setUser(MOCK_USER);
      localStorage.setItem("codequest-user", JSON.stringify(MOCK_USER));
    } else {
      // For demo purposes, allow any email/password combination
      const newUser = {
        id: `user-${Date.now()}`,
        name: email.split('@')[0],
        email: email
      };
      setUser(newUser);
      localStorage.setItem("codequest-user", JSON.stringify(newUser));
    }
    
    setIsLoading(false);
  };

  // Registration functionality
  const register = async (name, email, password) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser = { id: `user-${Date.now()}`, name, email };
    setUser(newUser);
    localStorage.setItem("codequest-user", JSON.stringify(newUser));
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("codequest-user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
