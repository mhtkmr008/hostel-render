import axios from "axios";


const baseURL="https://hostel-springboot-render.onrender.com/student";

const RegistrationService={
    addStudent:(firstName,middleName,lastName,phoneNumber,emailId)=>{
        const student={firstName:firstName,middleName:middleName,lastName:lastName,phoneNumber:phoneNumber,emailId:emailId};
        return axios.post(baseURL+"/add",student);
    },
}

export default RegistrationService;