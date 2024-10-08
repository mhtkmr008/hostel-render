import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BasePage=()=>{

    const navigate=useNavigate();
    const [id,setId]=useState('');

    const handleNavigationToRegistration=()=>{
        navigate("/register");
    };
    const handleNavigationToStudentList=()=>{
        navigate("/studentList");
    };
    
    const handleGetByID=()=>{
        if(id)
            {
                navigate("/getByIdComponent/"+id);
            }
            else
            {
                alert("Id Is Required");
            }        
    };

    return(
        <div>
            <h2>Navigation Buttons</h2>
            <button onClick={handleNavigationToRegistration}>Go To Registration</button>
            <button onClick={handleNavigationToStudentList}>See Students List</button>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input>
            <button onClick={handleGetByID}>Find By ID</button>
        </div>
    );
};

export default BasePage;