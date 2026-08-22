import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";


function LoginPage() {

  const navigate = useNavigate();


  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");



  const handleLogin = (e) => {

    e.preventDefault();


    console.log("Login clicked");
    console.log(role, email, password);



    if (!role || !email || !password) {

      setMessage(
        "Please select role and fill all fields"
      );

      return;

    }



    // Save role

    localStorage.setItem(
      "userRole",
      role
    );




    // Redirect

    if (role === "admin") {

      navigate("/admin-dashboard");

    }

    else if (role === "employee") {

      navigate("/employee-dashboard");

    }

  };





  return (

    <div className="login-page">



      {/* LEFT SIDE */}

      <div className="login-brand-section">


        <div>


          <div className="brand-logo">

            <span className="logo-icon">
              D
            </span>

            <span>
              DayFlow
            </span>


          </div>





          <div className="brand-text">

            <h1>
              Manage your work.
              <br />
              Simplify your day.
            </h1>


            <p>
              Manage attendance, leave requests
              and employee activities in one platform.
            </p>


          </div>


        </div>




        <p className="brand-footer">

          © 2026 DayFlow. All rights reserved.

        </p>



      </div>







      {/* LOGIN FORM */}


      <div className="login-form-section">


        <div className="login-card">



          <div className="login-header">

            <h2>
              Welcome Back
            </h2>


            <p>
              Login to access your workspace
            </p>


          </div>





          {
            message &&

            <div className="login-message">

              {message}

            </div>

          }







          <form onSubmit={handleLogin}>




            {/* ROLE */}

            <div className="login-form-group">


              <label>
                Select Role
              </label>



              <div className="role-options">





                {/* ADMIN */}

                <label

                  className={
                    role === "admin"
                    ? "role-option selected-role"
                    : "role-option"
                  }

                >


                  <input

                    type="radio"

                    name="role"

                    value="admin"

                    checked={
                      role === "admin"
                    }

                    onChange={(e)=>
                      setRole(e.target.value)
                    }

                  />


                  <span>
                    Admin
                  </span>


                </label>








                {/* EMPLOYEE */}

                <label

                  className={
                    role === "employee"
                    ? "role-option selected-role"
                    : "role-option"
                  }

                >


                  <input

                    type="radio"

                    name="role"

                    value="employee"

                    checked={
                      role === "employee"
                    }

                    onChange={(e)=>
                      setRole(e.target.value)
                    }

                  />


                  <span>
                    Employee
                  </span>


                </label>




              </div>


            </div>









            {/* EMAIL */}


            <div className="login-form-group">


              <label>
                Email Address
              </label>


              <input

                type="email"

                placeholder="Enter your email"

                value={email}

                onChange={(e)=>
                  setEmail(e.target.value)
                }

                required

              />


            </div>









            {/* PASSWORD */}


            <div className="login-form-group">


              <label>
                Password
              </label>


              <input

                type="password"

                placeholder="Enter your password"

                value={password}

                onChange={(e)=>
                  setPassword(e.target.value)
                }

                required

              />


            </div>








            <div className="login-options">


              <Link to="/forgot-password">

                Forgot Password?

              </Link>


            </div>








            <button

              type="submit"

              className="login-button"

            >

              Sign In

            </button>





          </form>








          <p className="signup-text">


            Don't have an account?


            <Link to="/signup">

              Create Account

            </Link>



          </p>





        </div>


      </div>



    </div>

  );

}


export default LoginPage;