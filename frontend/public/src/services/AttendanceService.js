const ATTENDANCE_KEY = "dayflow_attendance";

const getRecords = () => {
  const records = localStorage.getItem(ATTENDANCE_KEY);
  return records ? JSON.parse(records) : [];
};

const saveRecords = (records) => {
  localStorage.setItem(
    ATTENDANCE_KEY,
    JSON.stringify(records)
  );
};

const getTodayDate = () => {
  return new Date().toISOString().split("T")[0];
};

const formatTime = (date) => {
  if (!date) return "--";

  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const calculateWorkingHours = (checkIn, checkOut) => {
  const difference =
    new Date(checkOut) - new Date(checkIn);

  const hours = Math.floor(
    difference / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (difference % (1000 * 60 * 60)) /
      (1000 * 60)
  );

  return `${hours}h ${minutes}m`;
};

const AttendanceService = {
  getRecords,

  getTodayRecord: () => {
    const records = getRecords();
    const today = getTodayDate();

    return records.find(
      (record) => record.date === today
    );
  },

  checkIn: () => {
    const records = getRecords();
    const today = getTodayDate();

    const existingRecord = records.find(
      (record) => record.date === today
    );

    if (existingRecord) {
      return {
        success: false,
        message: "Already checked in today!",
      };
    }

    const now = new Date().toISOString();

    const newRecord = {
      id: Date.now(),
      date: today,
      checkIn: now,
      checkOut: null,
      workingHours: "--",
      status: "Present",
    };

    records.push(newRecord);
    saveRecords(records);

    return {
      success: true,
      record: newRecord,
    };
  },

  checkOut: () => {
    const records = getRecords();
    const today = getTodayDate();

    const index = records.findIndex(
      (record) => record.date === today
    );

    if (index === -1) {
      return {
        success: false,
        message: "Please check in first!",
      };
    }

    if (records[index].checkOut) {
      return {
        success: false,
        message: "Already checked out today!",
      };
    }

    const now = new Date().toISOString();

    records[index].checkOut = now;

    records[index].workingHours =
      calculateWorkingHours(
        records[index].checkIn,
        now
      );

    records[index].status = "Completed";

    saveRecords(records);

    return {
      success: true,
      record: records[index],
    };
  },

  formatTime,

  getSummary: () => {
    const records = getRecords();

    const totalRecords = records.length;

    const presentDays = records.filter(
      (record) =>
        record.status === "Present" ||
        record.status === "Completed"
    ).length;

    const completedDays = records.filter(
      (record) => record.status === "Completed"
    ).length;

    const workingDays = new Date().getDate();

    const attendancePercentage =
      workingDays > 0
        ? ((presentDays / workingDays) * 100).toFixed(2)
        : 0;

    return {
      totalRecords,
      presentDays,
      completedDays,
      attendancePercentage,
    };
  },
};

export default AttendanceService;