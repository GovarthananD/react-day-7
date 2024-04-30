import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TAPI } from "./teacherapi";


function Edit() {
    const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`${TAPI}/users/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setUser(mv));
  }, [id]);
  if (user) {
    return <Edituserform user={user} />;
  } else {
    return "Loading...";
  }
}

function Edituserform({ user }) {
  const navigate = useNavigate();
  const [id, setId] = useState(user.id);
  const [name, setName] = useState(user.name);
  const [subject, setSubject] = useState(user.subject);
  const [posiotion, setPosiotion] = useState(user.posiotion);
  const [qualification, setQualification] = useState(user.qualification);
  const [city, setCity] = useState(user.city);

  const submit = () => {
    const updateUser = {
      id: id,
      name: name,
      subject: subject,
      posiotion: posiotion,
      qualification: qualification,
      city: city,
    };
    fetch(`${TAPI}/users/${user.id}`, {
      method: "PUT",    
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateUser),
    })
      .then((data) => data.json())
      .then(() => navigate("/teacher"));
  };
 


return(
    <div  className="edit">
        <h1>Edit Details</h1>
        <div className="table">
            <ul className="list">
            <li><input type="text" placeholder="Enter ID" onChange={(event)=>setId(event.target.value)} value={id}/></li><br/>
                <li><input type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} value={name}/></li><br/>
                <li><input type="text" placeholder="Enter Subject" onChange={(event)=>setSubject(event.target.value)} value={subject}/></li><br/>
                <li><input type="text" placeholder="Enter Posistion" onChange={(event)=>setPosiotion(event.target.value)} value={posiotion}/></li><br/>
                <li><input type="text" placeholder="Enter Qualification" onChange={(event)=>setQualification(event.target.value)} value={qualification}/></li><br/>
                <li><input type="text" placeholder="Enter City" onChange={(event)=>setCity(event.target.value)} value={city}/></li><br/>
                <li><button onClick={submit}>Update</button></li>
            </ul>
        </div>
    </div>
    )
}

export default Edit;