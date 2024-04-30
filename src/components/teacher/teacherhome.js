import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TAPI } from "./teacherapi";
import axios from "axios";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

function Thome () {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${TAPI}/users`)
        .then((res)=>setUser(res.data))
        .catch((error)=>console.log(error))
    },[]);

    const handleDelete = (id) => {
        const confirm = window.confirm(
          "really you want to remove the teacher from the list"
        );
        if (confirm) {
          axios
            .delete(`${TAPI}/users/` + id)
            .then((res) => {
              window.location.reload();
            })
            .catch((err) => console.log(err));
        }
      };

    return(
        <div className="ttable">
            <button className="front" onClick={()=>navigate("/")}>HOME</button>
            <h1>Teachers Table</h1>
            <table className="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Posistion</th>
                        <th>Qualification</th>
                        <th>City</th>
                        <th><button onClick={()=>navigate("/add")}>Add New Teacher</button></th>
                    </tr>
                </thead>
                {user && user.map((teach)=>{
                    return(
                        <tr>
                            <td>{teach.id}</td>
                            <td>{teach.name}</td>
                            <td>{teach.subject}</td>
                            <td>{teach.posiotion}</td>
                            <td>{teach.qualification}</td>
                            <td>{teach.city}</td>
                            <td><button onClick={() => navigate(`/edit/Edit/${teach.id}`)}><BorderColorIcon/></button><button onClick={()=>handleDelete(teach.id)}><DeleteIcon/></button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Thome;