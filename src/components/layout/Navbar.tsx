import { FC } from "react";
import { useAuth } from "../auth/AuthContext";

const Navbar: FC = () => {
  const { logout, userRole } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Attendance App</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">
            {userRole === "admin" ? "Admin" : "Group Leader"}
          </span>
          <button
            onClick={logout}
            className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
