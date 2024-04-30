import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { SAPI } from "./studentapi";

function Shome () {
    const [student, setStudent] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${SAPI}/users`)
        .then((res)=>setStudent(res.data))
        .catch((error)=>console.log(error))
    },[]);

    const handleDelete = (id) => {
        const confirm = window.confirm(
          "really you want to remove the student from the list"
        );
        if (confirm) {
          axios
            .delete(`${SAPI}/users/` + id)
            .then((res) => {
              window.location.reload();
            })
            .catch((err) => console.log(err));
        }
      };

    return(
        <div className="ttable">
            <button className="front" onClick={()=>navigate("/")}>HOME</button>
            <h1>Students Table</h1>
            <table className="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>CLASS</th>
                        <th>MEDIUM</th>
                        <th>SCHOOL</th>
                        <th>CITY</th>
                        <th><button onClick={()=>navigate("/addstudent")}>Add New Student</button></th>
                    </tr>
                </thead>
                {student && student.map((stud)=>{
                    return(
                        <tr>
                            <td>{stud.id}</td>
                            <td>{stud.name}</td>
                            <td>{stud.classes}</td>
                            <td>{stud.medium}</td>
                            <td>{stud.school}</td>
                            <td>{stud.city}</td>
                            <td><button onClick={() => navigate(`/edit/EditStudent/${stud.id}`)}><BorderColorIcon/></button><button onClick={()=>handleDelete(stud.id)}><DeleteIcon/></button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Shome;