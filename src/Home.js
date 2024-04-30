import React from "react";
import { useNavigate } from "react-router-dom";

function Home () {
    const navigate = useNavigate();
    return(
        <div className="home">
            <h1>CRUD OPERATION</h1>        
            <h4>For Teacher</h4> <button onClick={()=>navigate("/teacher")}>Teacher</button><br/>
            <h4>For Student</h4> <button onClick={()=>navigate("/student")}>Student</button>
        </div>
    )
}

export default Home;