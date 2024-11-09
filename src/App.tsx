import { FC } from "react";
import Layout from "./components/layout/Layout";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import GroupLeaderDashboard from "./components/dashboard/GroupLeaderDashboard";
import "./App.css";

const App: FC = () => {
  // You can add logic here to determine which dashboard to show based on user role
  const isAdmin = true;

  return (
    <Layout>{isAdmin ? <AdminDashboard /> : <GroupLeaderDashboard />}</Layout>
  );
};

export default App;
