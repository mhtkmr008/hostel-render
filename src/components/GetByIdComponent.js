import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentListService from "../service/StudentListService";

const GetByIdComponent=()=>{
const {id}=useParams();
const [student,setStudent]=useState(null);

useEffect(()=>{
    StudentListService.getById(id).then((response)=>{setStudent(response.data);}).catch((error)=>{console.log("error Fetching data",error);setStudent(null);})
},[id]);

return(
    <div>
        <h3>Student Details</h3>
        {student?(<table>
            <thead>
                <th>ID</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email ID</th>
            </thead>
            <tbody>
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.middleName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.phoneNumber}</td>
                        <td>{student.emailId}</td>
                    </tr>
            </tbody>
        </table>) :(<p>Loading student details...</p>)}
        
    </div>
);
};

export default GetByIdComponent;