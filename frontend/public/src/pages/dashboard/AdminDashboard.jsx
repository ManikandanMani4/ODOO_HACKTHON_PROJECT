import { useNavigate } from "react-router-dom";
import "../../styles/AdminDashboard.css";


function AdminDashboard() {

  const navigate = useNavigate();


  const handleLogout = () => {

    localStorage.removeItem("userRole");

    navigate("/");

  };


  return (

    <div className="admin-dashboard">


      <header className="admin-header">

        <div>

          <h1>
            DayFlow
          </h1>

          <p>
            Admin Dashboard
          </p>

        </div>


        <button
          onClick={handleLogout}
          className="admin-logout-button"
        >

          Logout

        </button>


      </header>





      <main className="admin-content">


        <h2>
          Welcome Admin 👋
        </h2>



        <section className="admin-dashboard-grid">



          {/* Attendance */}

          <div
            className="admin-dashboard-card"
            onClick={() => navigate("/attendance")}
          >

            <div className="dashboard-icon">
              📅
            </div>


            <h3>
              Attendance
            </h3>


            <p>
              Manage employee attendance records.
            </p>


          <button className="dashboard-action-button">
  Open Attendance
</button>

          </div>





          {/* Leave Approval */}


          <div
            className="admin-dashboard-card"
            onClick={() => navigate("/admin/leave-approval")}
          >

            <div className="dashboard-icon">
              ✅
            </div>


            <h3>
              Leave Approval
            </h3>


            <p>
              Approve or reject leave requests.
            </p>


            <button className="dashboard-action-button">
  Manage Leaves
</button>


          </div>







          {/* Employee Module */}


          <div
            className="admin-dashboard-card"
            onClick={() => navigate("/employees")}
          >

            <div className="dashboard-icon">
              👥
            </div>


            <h3>
              Employees
            </h3>


            <p>
              Manage employee details.
            </p>


           
<button className="dashboard-action-button">
  View Employees
</button>

          </div>







          {/* Task Module */}


          <div
            className="admin-dashboard-card"
            onClick={() => navigate("/tasks")}
          >

            <div className="dashboard-icon">
              📋
            </div>


            <h3>
              Tasks
            </h3>


            <p>
              Assign and manage employee tasks.
            </p>


            
<button className="dashboard-action-button">
  Manage Tasks
</button>

          </div>



        </section>


      </main>


    </div>

  );

}


export default AdminDashboard;