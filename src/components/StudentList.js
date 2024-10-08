import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StudentListService from "../service/StudentListService";
import emailjs from '@emailjs/browser';
const StudentList=()=>{
    const [students,setStudents]=useState([]);
    const navigate=useNavigate();
    const[selectedStudent,setSelectedStudent]=useState(null);
    const [message,setMessage]=useState("");
// useEffect(()=>{
//     fetch("http://localhost:8080/student/getAllStudents").then(response=>response.json()).then(data=>setStudents(data)).catch(error=>console.log("Error fetching details"));
// },[])

useEffect(()=>{
    StudentListService.getAllStudents().then((response)=>{setStudents(response.data);}).catch((error)=>{console.log("error fetching details : ",error);});
},[]);
const handleUpdate=(id)=>{navigate(`/updateStudent/${id}`)};
const handleDelete=(id)=>{StudentListService.deleteStudent(id).then((response)=>{setStudents(response.data);}).catch((error)=>{console.log("Error deleting Student",error);})};
const handleSendMailClick=(student)=>{setSelectedStudent(student);};
const handleSendMail=(student)=>{
    const templateParams={
        user_name:selectedStudent.firstName,
        user_email:selectedStudent.emailId,
        message:message
    };

    emailjs.send('service_h6tufk4', 'template_idfldvi', templateParams, 'rdPjlhFDSygni0Jwo').then((response)=>{alert("message send successfully");setSelectedStudent(null);setMessage("");}).catch((error)=>{console.log("error",error);})
};    
return(
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student=>(
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.middleName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.phoneNumber}</td>
                        <td>{student.emailId}</td>
                        <td>
                            <button onClick={()=>handleUpdate(student.id)}>Update</button>
                            <button onClick={()=>handleDelete(student.id)}>Delete</button>
                            <button onClick={()=>handleSendMailClick(student)}>Send Mail</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
            {
                selectedStudent &&(<div>
                    <h3>Send Mail To {selectedStudent.firstName}</h3>
                    <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Enter your message here"></textarea>
                    <button onClick={handleSendMail}>Send Mail</button>
                    <button onClick={()=>{setSelectedStudent(null)}}>Cancel</button>
                </div>)
            }
        </div>
    );
};

export default StudentList;