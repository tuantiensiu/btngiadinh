import { FC } from "react";
import Card from "../../common/Card";
import AttendanceTable from "./AttendanceTable";

const GroupLeaderDashboard: FC = () => {
  const members = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
  ];

  const handleAttendanceChange = (
    memberId: string,
    activity: string,
    status: string
  ) => {
    console.log(`Member ${memberId}: ${activity} - ${status}`);
  };

  return (
    <Card title="Today's Attendance">
      <AttendanceTable
        members={members}
        onAttendanceChange={handleAttendanceChange}
      />
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Submit Attendance
      </button>
    </Card>
  );
};

export default GroupLeaderDashboard;
