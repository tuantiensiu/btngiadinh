import { FC } from "react";
import Card from "../../common/Card";
import GroupMembers from "../group/GroupMembers";

const AdminDashboard: FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <Card title="Quick Stats">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Groups:</span>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex justify-between">
              <span>Total Members:</span>
              <span className="font-semibold">50</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Group Members Section */}
      <GroupMembers />
    </div>
  );
};

export default AdminDashboard;
