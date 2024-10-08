import React from "react";
import { useState } from "react";
import RegistrationService from "../service/RegistrationService";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const[firstName,setfirstname]=useState("");
    const[middleName,setMiddleName]=useState("");
    const[lastName,setLastName]=useState("");
    const[phoneNumber,setPhoneNumber]=useState(0);
    const[emailId,setEmailId]=useState("");
    const[error,setError]=useState("");
    const navigate=useNavigate();//for navigting

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(firstName===''||lastName===''||phoneNumber===''||emailId==='')
        {
            setError("All Fields are required");
        }
        else
        {
            setError("");
            RegistrationService.addStudent(firstName,middleName,lastName,phoneNumber,emailId).then((result)=>{if(result.data){navigate("/studentList");}})
        }
    };

    return(
        <div>
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name :</label>
                    <input type="text" value={firstName} onChange={(e)=>setfirstname(e.target.value)} required></input>
                </div>

                <div>
                    <label>Middle Name :</label>
                    <input type="text" value={middleName} onChange={(e)=>setMiddleName(e.target.value)}></input>
                </div>

                <div>
                    <label>Last Name :</label>
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} required></input>
                </div>

                <div>
                    <label>Phone Number :</label>
                    <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required></input>
                </div>

                <div>
                    <label>Email ID</label>
                    <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required></input>
                </div>

                <div>
                    {error && <p>{error}</p>}
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Register;