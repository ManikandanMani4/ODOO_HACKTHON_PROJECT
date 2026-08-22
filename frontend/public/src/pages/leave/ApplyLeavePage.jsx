import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveService from "../../services/LeaveService";
import "../../styles/Leave.css";


function ApplyLeavePage() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",

  });


  const [message, setMessage] = useState("");



  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };




  const handleSubmit = (e)=>{

    e.preventDefault();


    if(formData.startDate > formData.endDate){

      setMessage(
        "End date cannot be before start date"
      );

      return;

    }



    const result =
      LeaveService.applyLeave(formData);



    if(result.success){

      setMessage(
        "Leave request submitted successfully"
      );


      setFormData({

        leaveType:"",
        startDate:"",
        endDate:"",
        reason:"",

      });

    }


  };





  return (

    <div className="leave-page">


      <div className="leave-container">



        <h1>
          Apply Leave
        </h1>


        <p className="leave-description">

          Submit your leave request

        </p>




        <button

          className="back-button"

          onClick={()=>
            navigate("/employee-dashboard")
          }

        >

          ← Back to Dashboard

        </button>





        {
          message &&

          <div className="success-message">

            {message}

          </div>

        }





        <form
          className="leave-form"
          onSubmit={handleSubmit}
        >





          <div className="form-group">


            <label>
              Leave Type
            </label>


            <select

              name="leaveType"

              value={formData.leaveType}

              onChange={handleChange}

              required

            >

              <option value="">
                Select Leave Type
              </option>

              <option value="Sick Leave">
                Sick Leave
              </option>

              <option value="Casual Leave">
                Casual Leave
              </option>

              <option value="Personal Leave">
                Personal Leave
              </option>

              <option value="Vacation Leave">
                Vacation Leave
              </option>


            </select>


          </div>






          <div className="form-group">


            <label>
              Start Date
            </label>


            <input

              type="date"

              name="startDate"

              value={formData.startDate}

              onChange={handleChange}

              required

            />


          </div>






          <div className="form-group">


            <label>
              End Date
            </label>


            <input

              type="date"

              name="endDate"

              value={formData.endDate}

              onChange={handleChange}

              required

            />


          </div>






          <div className="form-group">


            <label>
              Reason
            </label>


            <textarea

              name="reason"

              value={formData.reason}

              onChange={handleChange}

              placeholder="Enter reason for leave"

              rows="5"

              required

            />



          </div>






          <button

            className="submit-button"

            type="submit"

          >

            Submit Leave Request

          </button>



        </form>





        <button

          className="history-button"

          onClick={()=>
            navigate("/leave/history")
          }

        >

          View Leave History

        </button>




      </div>


    </div>

  );

}


export default ApplyLeavePage;