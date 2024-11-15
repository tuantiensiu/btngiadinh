export interface Member {
    id: string;
    name: string;
    email: string;
    role: 'member' | 'leader';
    phoneNumber: string;
  }
  
  export interface Group {
    id: string;
    name: string;
    members: Member[];
    leader: string; // member id of the leader
  }