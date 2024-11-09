import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Attendance App</h1>
        <button className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
