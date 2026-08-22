const LEAVE_KEY = "dayflow_leaves";

const getLeaves = () => {
  const leaves = localStorage.getItem(LEAVE_KEY);
  return leaves ? JSON.parse(leaves) : [];
};

const saveLeaves = (leaves) => {
  localStorage.setItem(
    LEAVE_KEY,
    JSON.stringify(leaves)
  );
};

const LeaveService = {
  getLeaves,

  applyLeave: (leaveData) => {
    const leaves = getLeaves();

    const newLeave = {
      id: Date.now(),
      leaveType: leaveData.leaveType,
      startDate: leaveData.startDate,
      endDate: leaveData.endDate,
      reason: leaveData.reason,
      status: "Pending",
      appliedDate: new Date().toISOString(),
    };

    leaves.push(newLeave);
    saveLeaves(leaves);

    return {
      success: true,
      leave: newLeave,
    };
  },

  getLeaveById: (id) => {
    const leaves = getLeaves();

    return leaves.find(
      (leave) => leave.id === Number(id)
    );
  },

  getPendingLeaves: () => {
    const leaves = getLeaves();

    return leaves.filter(
      (leave) => leave.status === "Pending"
    );
  },

  updateLeaveStatus: (id, status) => {
    const leaves = getLeaves();

    const index = leaves.findIndex(
      (leave) => leave.id === id
    );

    if (index === -1) {
      return {
        success: false,
        message: "Leave request not found",
      };
    }

    leaves[index].status = status;

    saveLeaves(leaves);

    return {
      success: true,
      leave: leaves[index],
    };
  },
};

export default LeaveService;