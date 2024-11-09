import { FC } from "react";
import Card from "../../common/Card";

const AdminDashboard: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Group Management">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Group Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Members
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Group A</td>
              <td className="px-6 py-4">15</td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:text-blue-800">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      <Card title="Attendance Overview">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Total Present:</span>
            <span className="font-semibold">85%</span>
          </div>
          <div className="flex justify-between">
            <span>Total Absent:</span>
            <span className="font-semibold">15%</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
