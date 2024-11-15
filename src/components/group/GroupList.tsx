import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Group {
  id: string;
  name: string;
  memberCount: number;
  leader: string;
}

const GroupList: FC = () => {
  const navigate = useNavigate();

  // Example data - replace with your actual data
  const groups: Group[] = [
    { id: "1", name: "Group A", memberCount: 15, leader: "John Doe" },
    { id: "2", name: "Group B", memberCount: 12, leader: "Jane Smith" },
    { id: "3", name: "Group C", memberCount: 10, leader: "Mike Johnson" },
  ];

  const handleViewDetails = (groupId: string) => {
    navigate(`/groups/${groupId}`);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Group Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Leader
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Members
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {groups.map((group) => (
            <tr key={group.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {group.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{group.leader}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{group.memberCount}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleViewDetails(group.id)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupList;
