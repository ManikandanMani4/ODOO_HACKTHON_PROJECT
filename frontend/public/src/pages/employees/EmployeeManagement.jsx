import { useNavigate } from "react-router-dom";
import "../../styles/EmployeeManagement.css";


function EmployeeManagement(){

const navigate = useNavigate();


const employees = [
  {
    id:1,
    name:"Manikandan",
    role:"Developer",
    department:"IT"
  },
  {
    id:2,
    name:"Arun",
    role:"Tester",
    department:"QA"
  }
];


return (

<div className="module-page">


<h1>
Employee Management
</h1>


<button
onClick={()=>navigate("/admin-dashboard")}
>
← Back
</button>



<table>

<thead>

<tr>

<th>Name</th>
<th>Role</th>
<th>Department</th>

</tr>

</thead>


<tbody>


{
employees.map((emp)=>(

<tr key={emp.id}>

<td>{emp.name}</td>

<td>{emp.role}</td>

<td>{emp.department}</td>


</tr>


))

}


</tbody>


</table>



</div>

);


}


export default EmployeeManagement;