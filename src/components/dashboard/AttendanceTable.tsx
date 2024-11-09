import { FC } from "react";

interface Member {
  id: string;
  name: string;
}

interface AttendanceTableProps {
  members: Member[];
  onAttendanceChange: (
    memberId: string,
    activity: string,
    status: string
  ) => void;
}

const AttendanceTable: FC<AttendanceTableProps> = ({
  members,
  onAttendanceChange,
}) => {
  const activities = ["Group Hours", "BC Study", "Singing Practice"];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            {activities.map((activity) => (
              <th
                key={activity}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {activity}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {members.map((member) => (
            <tr key={member.id}>
              <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
              {activities.map((activity) => (
                <td
                  key={`${member.id}-${activity}`}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  <select
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) =>
                      onAttendanceChange(member.id, activity, e.target.value)
                    }
                  >
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
