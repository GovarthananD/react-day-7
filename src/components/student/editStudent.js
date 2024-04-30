import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SAPI } from "./studentapi";

function EditStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState();

  useEffect(() => {
    fetch(`${SAPI}/users/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setStudent(mv));
  }, [id]);
  if (student) {
    return <EditStudentform student={student} />;
  } else {
    return "Loading...";
  }
}

function EditStudentform({ student }) {
  const navigate = useNavigate();
  const [id, setId] = useState(student.id);
  const [name, setName] = useState(student.name);
  const [classes, setClasses] = useState(student.classes);
  const [medium, setMedium] = useState(student.medium);
  const [school, setSchool] = useState(student.school);
  const [city, setCity] = useState(student.city);

  const submit = () => {
    const updateStudent = {
      id: id,
      name: name,
      classes: classes,
      medium: medium,
      school: school,
      city: city,
    };
    fetch(`${SAPI}/users/${student.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateStudent),
    })
      .then((data) => data.json())
      .then(() => navigate("/student"));
  };

  return (
    <div className="edit">
      <h1>Edit Details</h1>
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
            <button onClick={submit}>Update</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EditStudent;
