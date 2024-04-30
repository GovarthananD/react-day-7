import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TAPI } from "./teacherapi";

function AddTeacher({user, setUser}) {
    const navigate = useNavigate();

    const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [posiotion, setPosiotion] = useState("");
  const [qualification, setQualification] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    const newUser = {
      id: id,
      name: name,
      subject: subject,
      posiotion: posiotion,
      qualification: qualification,
      city: city,
    };
    if (!id || !name || !subject || !posiotion || !qualification || !city) {
        alert("Do not leave blank fields");
        return;
      }
      fetch(`${TAPI}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .then(() => navigate("/teacher"))
        .catch((error) => {
          alert("something error" + error);
        });
    };

    return(<div className="add">
        <h1>Add New Teacher</h1>
        <div className="table">
            <ul className="list">
                <li><input type="text" placeholder="Enter ID" onChange={(event)=>setId(event.target.value)} value={id}/></li><br/>
                <li><input type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} value={name}/></li><br/>
                <li><input type="text" placeholder="Enter Subject" onChange={(event)=>setSubject(event.target.value)} value={subject}/></li><br/>
                <li><input type="text" placeholder="Enter Posistion" onChange={(event)=>setPosiotion(event.target.value)} value={posiotion}/></li><br/>
                <li><input type="text" placeholder="Enter Qualification" onChange={(event)=>setQualification(event.target.value)} value={qualification}/></li><br/>
                <li><input type="text" placeholder="Enter City" onChange={(event)=>setCity(event.target.value)} value={city}/></li><br/>
                <li><button onClick={handleSubmit}>Submit</button></li>
            </ul>
        </div>
    </div>) 
}

export default AddTeacher;