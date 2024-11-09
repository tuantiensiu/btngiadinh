import { FC } from "react";
import Layout from "./components/layout/Layout";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import GroupLeaderDashboard from "./components/dashboard/GroupLeaderDashboard";
import "./App.css";
import LoginPage from "./components/auth/LoginPage";
import { AuthProvider, useAuth } from "./components/auth/AuthContext";

const AppContent: FC = () => {
  const { isAuthenticated, userRole } = useAuth();
  if (!isAuthenticated) {
    return <LoginPage />;
  }
  return (
    <Layout>
      {userRole === "admin" ? <AdminDashboard /> : <GroupLeaderDashboard />}
    </Layout>
  );
};
const App: FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
