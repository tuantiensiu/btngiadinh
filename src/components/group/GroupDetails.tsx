import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Member {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
}

interface GroupDetail {
  id: string;
  name: string;
  leader: string;
  members: Member[];
}

const GroupDetails: FC = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState<GroupDetail | null>(null);

  useEffect(() => {
    // Example data - replace with your actual API call
    const fetchGroupDetails = () => {
      // Simulating API call
      const mockGroup: GroupDetail = {
        id: groupId!,
        name: "Group A",
        leader: "John Doe",
        members: [
          {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            phoneNumber: "123-456-7890",
            role: "Leader",
          },
          {
            id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            phoneNumber: "123-456-7891",
            role: "Member",
          },
          // Add more members as needed
        ],
      };
      setGroup(mockGroup);
    };

    fetchGroupDetails();
  }, [groupId]);

  if (!group) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{group.name}</h2>
          <p className="text-gray-500">Leader: {group.leader}</p>
        </div>
        <button
          onClick={() => navigate("/groups")}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
        >
          Back to Groups
        </button>
      </div>

      {/* Members List */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">Group Members</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {group.members.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {member.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{member.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {member.phoneNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        member.role === "Leader"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {member.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
