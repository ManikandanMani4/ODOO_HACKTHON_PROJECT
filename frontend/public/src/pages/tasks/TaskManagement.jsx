import { useNavigate } from "react-router-dom";
import "../../styles/TaskManagement.css";


function TaskManagement(){


const navigate = useNavigate();


const tasks=[

{
id:1,
task:"Complete Attendance Module",
employee:"Manikandan",
status:"Pending"
},

{
id:2,
task:"Fix Login Page",
employee:"Arun",
status:"Completed"
}

];



return(


<div className="module-page">


<h1>
Task Management
</h1>



<button
onClick={()=>navigate("/admin-dashboard")}
>
← Back
</button>




<table>


<thead>

<tr>

<th>Task</th>
<th>Employee</th>
<th>Status</th>

</tr>

</thead>



<tbody>


{
tasks.map((item)=>(

<tr key={item.id}>


<td>
{item.task}
</td>


<td>
{item.employee}
</td>


<td>
{item.status}
</td>


</tr>


))

}


</tbody>


</table>



</div>


);


}


export default TaskManagement;