import { FC, useState } from "react";
import Card from "../../common/Card";
import MemberList from "./MemberList";
import { Member } from "../../types";

const GroupMembers: FC = () => {
  // Example data - replace with your actual data source
  const [members] = useState<Member[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      role: "leader",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "123-456-7891",
      role: "member",
    },
    // Add more members as needed
  ]);

  const handleEditMember = (member: Member) => {
    // Implement edit functionality
    console.log("Edit member:", member);
  };

  const handleDeleteMember = (memberId: string) => {
    // Implement delete functionality
    console.log("Delete member:", memberId);
  };

  return (
    <Card title="Group Members">
      <div className="mb-4 flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Add New Member
        </button>
      </div>
      <MemberList
        members={members}
        onEdit={handleEditMember}
        onDelete={handleDeleteMember}
      />
    </Card>
  );
};

export default GroupMembers;
