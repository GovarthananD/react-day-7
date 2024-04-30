import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SAPI } from "./studentapi";

function AddStudent({ student, setStudent }) {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [classes, setClasses] = useState("");
  const [medium, setMedium] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    const newUser = {
      id: id,
      name: name,
      classes: classes,
      medium: medium,
      school: school,
      city: city,
    };
    if (!id || !name || !classes || !medium || !school || !city) {
      alert("Do not leave blank fields");
      return;
    }
    fetch(`${SAPI}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .then(() => navigate("/student"))
      .catch((error) => {
        alert("something error" + error);
      });
  };

  return (
    <div className="add">
      <h1>Add New Student</h1>
      <div className="table">
        <ul className="list">
          <li>
            <input
              type="text"
              placeholder="Enter ID"
              onChange={(event) => setId(event.target.value)}
              value={id}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter Class"
              onChange={(event) => setClasses(event.target.value)}
              value={classes}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter Medium"
              onChange={(event) => setMedium(event.target.value)}
              value={medium}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter School"
              onChange={(event) => setSchool(event.target.value)}
              value={school}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter City"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </li>
          <br />
          <li>
            <button onClick={handleSubmit}>Submit</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddStudent;
