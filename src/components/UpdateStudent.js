import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentListService from "../service/StudentListService";

const UpdateStudent=()=>{

    const {id}=useParams();
    const [firstName,setFirstName]=useState('');
    const [middleName,setMiddleName]=useState('');
    const [lastName,setLastName]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [emailId,setEmailId]=useState('');
    const navigate=useNavigate();
    
    useEffect(()=>{
        StudentListService.getById(id).then((response)=>{
            const student=response.data;
            setFirstName(student.firstName);
            setMiddleName(student.middleName);
            setLastName(student.lastName);
            setPhoneNumber(student.phoneNumber);
            setEmailId(student.emailId);
            
        }).catch((error)=>{console.log("Error fetching Stdent Data",error);});
    },[id]);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const updateStudent={firstName,middleName,lastName,phoneNumber,emailId};
        StudentListService.updateStudent(id,updateStudent).then(()=>{navigate('/studentList')}).catch((error)=>{console.log("error fetching data",error)})
    };
    
    return(
        <div>
            <h2>Update Student Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>FirstName</label>
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                </div>
                <div>
                    <label>Middle Name</label>
                    <input type="text" value={middleName} onChange={(e)=>setMiddleName(e.target.value)}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                </div>
                <div>
                    <label>PhoneNumber</label>
                    <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                </div>
                <div>
                    <label>Email ID</label>
                    <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)}></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateStudent;